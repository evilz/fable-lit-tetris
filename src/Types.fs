namespace TetrisLit.Types





module Board =

    type Color =
        | Cyan
        | Blue
        | Orange
        | Yellow
        | Green
        | Purple
        | Red
        | Gray

    type Cell =
        | Fragment of Color
        | Ghost

    type Position = { X: int; Y: int }

    type Position with
        static member (+)({ X = x1; Y = y1 }, { X = x2; Y = y2 }) = { X = x1 + x2; Y = y1 + y2 }

    type Board = Map<Position, Cell option>

    module Board =
        let width = 10
        let height = 24

module Tetromino =

    open Board

    type Tetromino =
        | I
        | L
        | Z
        | S
        | T
        | J
        | O
        | Λ

    let eligiblePieces =
        [ Tetromino.I
          Tetromino.L
          Tetromino.Z
          Tetromino.S
          Tetromino.T
          Tetromino.J
          Tetromino.O ]
        |> Set.ofList

    type Rotation =
        | Up
        | Right
        | Down
        | Left

    type MetaInfo = { Color: Board.Color }

    let toMeta =
        function
        | I -> { Color = Color.Cyan }
        | J -> { Color = Color.Blue }
        | L -> { Color = Color.Orange }
        | O -> { Color = Color.Yellow }
        | S -> { Color = Color.Green }
        | T -> { Color = Color.Purple }
        | Z -> { Color = Color.Red }
        | Λ -> { Color = Color.Gray }

    let structure (rot: Rotation) tetrimino =
        (match tetrimino with
         | I -> [ (0, 0); (0, -1); (0, 1); (0, -2) ]
         | J -> [ (0, 0); (-1, 0); (0, -1); (0, -2) ]
         | L -> [ (0, 0); (1, 0); (0, -1); (0, -2) ]
         | O -> [ (0, 0); (0, 1); (1, 1); (1, 0) ]
         | S -> [ (1, 0); (0, 0); (0, 1); (-1, 1) ]
         | T -> [ (0, 0); (0, -1); (-1, 0); (1, 0) ]
         | Z -> [ (-1, 0); (0, 0); (0, 1); (1, 1) ]
         | Λ ->
             [ (-1, -1)
               (0, 0)
               (-1, 1)
               (1, 1)
               (-2, 2)
               (2, 2) ])
        |> Seq.ofList
        |> Seq.map (
            (fun (x, y) ->
                match rot with
                | Up -> (x, y)
                | Right -> (-y, x)
                | Down -> (-x, -y)
                | Left -> (y, -x))
            >> fun (x, y) -> { X = x; Y = y }
        )

module Game =

    open Board
    open Tetromino

    type ActivePiece =
        { Tetromino: Tetromino
          Position: Position
          Rotation: Rotation }

    type HoldPiece =
        | Locked of Tetromino
        | Unlocked of Tetromino option

    [<Measure>]
    type ms

    type ClockState = { Ticks: int64; DropFrequency: int64 }

    type GameState =
        { Paused: bool
          PlacedBoard: Board
          ActivePiece: ActivePiece
          HoldPiece: HoldPiece
          EligiblePieces: Set<Tetromino>
          QueuedPieces: Tetromino list
          Clock: ClockState }

    type Spin =
        | Clockwise
        | CounterClockwise

    module Spin =
        let nextRot =
            function
            | Clockwise ->
                function
                | Up -> Right
                | Right -> Down
                | Down -> Left
                | Left -> Up
            | CounterClockwise ->
                function
                | Up -> Left
                | Right -> Up
                | Down -> Right
                | Left -> Down

    type ActivePieceMsg =
        | Drop
        | HardDrop
        | Hold
        | UpdatePosition of Position
        | OffsetPosition of Position
        | UpdateRotation of Spin



module Model =
    //type Model = GameState

    type Msg =
        | Tick
        | TogglePaused
        | TriggerRestart
        | LambdaMode
        | UpdateActivePiece of Game.ActivePieceMsg
