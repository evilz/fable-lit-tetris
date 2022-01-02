module TetrisLit.App

open Browser
open Elmish
open Elmish.HMR
open Lit
open Lit.Elmish
open Components

open TetrisLit.Types
open TetrisLit.Types.Game
open TetrisLit.Types.Board
open TetrisLit.Types.Tetromino
open TetrisLit.Types.Model
open Fable.Core.Util
open Lit.Types



/// START HERE

let private hmr = HMR.createToken ()



let update msg model =
    match msg with
    | _ -> model, Cmd.none

// ########### VIEW ###########

let toCellClass =
    function
    | Fragment color ->
        match color with
        | Cyan -> "cyan"
        | Blue -> "blue"
        | Orange -> "orange"
        | Yellow -> "yellow"
        | Green -> "green"
        | Purple -> "purple"
        | Red -> "red"
        | Gray -> "gray"
    | Ghost -> "ghost"

let cellElm pos (model: Cell option) =
    let elmClass =
        (match model with
         | Some cell -> toCellClass cell
         | None -> "empty")
        |> sprintf "cell %s"

    html
        $"""
        <div data-col={pos.X} class={elmClass}></div>
        """

let boardElm (model: Board) =
    let rows =
        model
        |> Map.toSeq
        |> Seq.sortBy (fun (pos, _) -> pos.Y, pos.X)
        |> Seq.groupBy (fun (pos, _) -> pos.Y)


    let rowElm row cols =
        html
            $"""
            <div data-row="{row}" class="row" >
                        {(cols
                          |> Seq.map (fun (pos, cell) -> cellElm pos cell)
                          |> List.ofSeq)}
            </div>
        """

    html
        $"""
        <div class="board main">
        {(rows
          |> Seq.map (fun (row, cols) -> rowElm row cols)
          |> List.ofSeq)}
        </div>
    """

type BoardPiece =
    | TetroPiece of ActivePiece
    | GhostPiece of ActivePiece

let applyToBoard board (piece: BoardPiece) =
    let (pos, rot, tetro, cell) =
        match piece with
        | TetroPiece { Position = pos
                       Rotation = rot
                       Tetromino = tetro } -> (pos, rot, tetro, Fragment (toMeta tetro).Color)
        | GhostPiece { Position = pos
                       Rotation = rot
                       Tetromino = tetro } -> (pos, rot, tetro, Ghost)

    let activeStructure = structure rot tetro

    activeStructure
    |> Seq.fold
        (fun (acc: Board) offset ->
            let activeCellPosition = pos + offset

            match activeCellPosition with
            | { X = x; Y = y } when x < 0 || y < 0 -> acc
            | _ -> acc.Add(activeCellPosition, Some cell))
        board

module MiniBoard =
    let size = 6

let miniBoard boardClass cellSize (tetroOpt: Tetromino option) =

    let cell sizePx cellType =
        html $"""<div style="width:{sizePx}; height:{sizePx}" class={"cell " + cellType}></div>"""

    let body =
        let structure =
            match tetroOpt with
            | Some tetro ->
                tetro
                |> structure Rotation.Up
                |> Seq.map ((+) { X = 2; Y = 2 })
                |> Set.ofSeq
            | None -> Set.empty

        List.init MiniBoard.size (fun y ->
            html
                $"""
             <div class="row" >
              {(List.init MiniBoard.size (fun x ->
                   let cellType =
                       let hasCell =
                           structure |> Set.contains { X = x; Y = y }

                       match (tetroOpt, hasCell) with
                       | (Some tetro, true) -> let { Color = color } = (tetro |> toMeta) in Fragment color |> toCellClass
                       | _ -> "empty"

                   let sizePx = cellSize |> sprintf "%ipx"

                   cell sizePx cellType))}
             </div>
             """)

    html
        $"""
      <div class={sprintf "board %s" boardClass}>
          {body}
      </div>
    """


let holdElm holdPiece =
    let tetroOpt =
        match holdPiece with
        | Locked tetro -> Some tetro
        | Unlocked tetroOpt -> tetroOpt

    tetroOpt |> miniBoard "hold" 15


let controlsElm lambdaEnabled =
    let controls =
        [ "L",
          if lambdaEnabled then
              "λ mode enabled"
          else
              "???"
          "R", "restart"
          "Esc/P", "pause"
          "Up", "rotate CW"
          "Right", "move right"
          "Left", "move left"
          "Down", "move down"
          "Space", "hard drop"
          "C", "hold"
          "Z", "rotate CCW" ]

    let item label props desc =
        html
            $"""
    <li style="{props}" >{label} -
      <span class="description" style="{props}" >{desc}</span>
    </li>
    """

    html
        $"""
    <ul class="board info" style="margin-top: 15px;">
     {(controls
       |> List.fold
           (fun acc (label, desc) ->
               let props =
                   if label = "L" then
                       "color:#ff5252"
                   else
                       ""

               (item label props desc) :: acc)
           [])}

  </ul>
    """

let creditsElm =
    html
        $"""
        <div class="board info">
            <a href="https://github.com/jamieday/FunkyTetris">View on GitHub</a>
            <a style="margin-top:5px"  href="http://jamieday.ca">More stuff</a>
        </div>
    """

let queuedElm queued =

    let hr = html $"""<hr />"""

    html
        $"""
        <div class="queued">
           {(List.foldBack
                (fun tetro acc ->
                    let queuedPieceRendered = tetro |> Some |> miniBoard "queued" 10

                    queuedPieceRendered
                    :: match acc with
                       | _ :: _ -> hr :: acc
                       | [] -> [])
                queued
                [])}
        </div>
    """


let view (model: GameState) dispatch =

    let infoColRendered =
        html
            $"""
        <div class="info">
          {holdElm (model.HoldPiece)}
          {controlsElm (model.EligiblePieces |> Set.contains Λ)}
          {creditsElm}
        </div>
      """

    let boardColRendered =
        model.ActivePiece
        |> TetroPiece
        |> applyToBoard (
            (model.ActivePiece
             |> State.droppedPlacement model.PlacedBoard)
            |> GhostPiece
            |> applyToBoard model.PlacedBoard
        )
        |> boardElm


    let queuedColRendered = queuedElm model.QueuedPieces

    let gameClass =
        sprintf
            "game %s"
            (if model.Paused then
                 "paused"
             else
                 "active")

    html
        $"""
      <div class="{gameClass}" style="margin-left: 2rem;">
       {infoColRendered}
       {boardColRendered}
       {queuedColRendered}

      </div>
    """

[<LitElement("evilz-tetris")>]
let tetris () =

    Hook.useHmr (hmr)
    // This call is obligatory to initialize the web component
    let h, props =
        LitElement.init (fun config ->
            config.useShadowDom <- false
            config.props <- {| initial = Prop.Of(defaultValue = 0) |}

            config.styles <-
                [ css
                      $"""
                :host {{
                    background-color: #555;
                    color: #4a4a4a;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    display: block;

                }}
                .root-content {{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }}
                .game {{

                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }}
                """ ])

    let model, dispatch =
        Hook.useElmish (State.init, State.update)

    view model dispatch

let register () = ()
