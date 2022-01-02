var NumberStyles;
(function(NumberStyles2) {
  NumberStyles2[NumberStyles2["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
})(NumberStyles || (NumberStyles = {}));
function op_UnaryNegation_Int32(x2) {
  return x2 === -2147483648 ? x2 : -x2;
}
const symbol = Symbol("numeric");
function isNumeric(x2) {
  return typeof x2 === "number" || (x2 === null || x2 === void 0 ? void 0 : x2[symbol]);
}
function compare$3(x2, y) {
  if (typeof x2 === "number") {
    return x2 < y ? -1 : x2 > y ? 1 : 0;
  } else {
    return x2.CompareTo(y);
  }
}
function multiply$1(x2, y) {
  if (typeof x2 === "number") {
    return x2 * y;
  } else {
    return x2[symbol]().multiply(y);
  }
}
function toFixed(x2, dp) {
  if (typeof x2 === "number") {
    return x2.toFixed(dp);
  } else {
    return x2[symbol]().toFixed(dp);
  }
}
function toPrecision(x2, sd) {
  if (typeof x2 === "number") {
    return x2.toPrecision(sd);
  } else {
    return x2[symbol]().toPrecision(sd);
  }
}
function toExponential(x2, dp) {
  if (typeof x2 === "number") {
    return x2.toExponential(dp);
  } else {
    return x2[symbol]().toExponential(dp);
  }
}
function toHex(x2) {
  if (typeof x2 === "number") {
    return (Number(x2) >>> 0).toString(16);
  } else {
    return x2[symbol]().toHex();
  }
}
var wasm = null;
try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    13,
    2,
    96,
    0,
    1,
    127,
    96,
    4,
    127,
    127,
    127,
    127,
    1,
    127,
    3,
    7,
    6,
    0,
    1,
    1,
    1,
    1,
    1,
    6,
    6,
    1,
    127,
    1,
    65,
    0,
    11,
    7,
    50,
    6,
    3,
    109,
    117,
    108,
    0,
    1,
    5,
    100,
    105,
    118,
    95,
    115,
    0,
    2,
    5,
    100,
    105,
    118,
    95,
    117,
    0,
    3,
    5,
    114,
    101,
    109,
    95,
    115,
    0,
    4,
    5,
    114,
    101,
    109,
    95,
    117,
    0,
    5,
    8,
    103,
    101,
    116,
    95,
    104,
    105,
    103,
    104,
    0,
    0,
    10,
    191,
    1,
    6,
    4,
    0,
    35,
    0,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    126,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    127,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    128,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    129,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    130,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11
  ])), {}).exports;
} catch (e2) {
}
function Long(low, high, unsigned) {
  this.low = low | 0;
  this.high = high | 0;
  this.unsigned = !!unsigned;
}
Long.prototype.GetHashCode = function() {
  let h1 = this.unsigned ? 1 : 0;
  h1 = (h1 << 5) + h1 ^ this.high;
  h1 = (h1 << 5) + h1 ^ this.low;
  return h1;
};
Long.prototype.Equals = function(x2) {
  return equals$2(this, x2);
};
Long.prototype.CompareTo = function(x2) {
  return compare$2(this, x2);
};
Long.prototype.toString = function(radix) {
  return toString$2(this, radix);
};
Long.prototype.toJSON = function() {
  return toString$2(this);
};
Long.prototype[symbol] = function() {
  const x2 = this;
  return {
    multiply: (y) => multiply(x2, y),
    toPrecision: (sd) => String(x2) + 0 .toPrecision(sd).substr(1),
    toExponential: (dp) => String(x2) + 0 .toExponential(dp).substr(1),
    toFixed: (dp) => String(x2) + 0 .toFixed(dp).substr(1),
    toHex: () => toString$2(x2.unsigned ? x2 : fromBytes(toBytes(x2), true), 16)
  };
};
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
var INT_CACHE = {};
var UINT_CACHE = {};
function fromInt(value2, unsigned) {
  var obj, cachedObj, cache;
  if (unsigned) {
    value2 >>>= 0;
    if (cache = 0 <= value2 && value2 < 256) {
      cachedObj = UINT_CACHE[value2];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits$1(value2, (value2 | 0) < 0 ? -1 : 0, true);
    if (cache)
      UINT_CACHE[value2] = obj;
    return obj;
  } else {
    value2 |= 0;
    if (cache = -128 <= value2 && value2 < 128) {
      cachedObj = INT_CACHE[value2];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits$1(value2, value2 < 0 ? -1 : 0, false);
    if (cache)
      INT_CACHE[value2] = obj;
    return obj;
  }
}
function fromNumber(value2, unsigned) {
  if (isNaN(value2))
    return unsigned ? UZERO : ZERO;
  if (unsigned) {
    if (value2 < 0)
      return UZERO;
    if (value2 >= TWO_PWR_64_DBL)
      return MAX_UNSIGNED_VALUE;
  } else {
    if (value2 <= -TWO_PWR_63_DBL)
      return MIN_VALUE;
    if (value2 + 1 >= TWO_PWR_63_DBL)
      return MAX_VALUE;
  }
  if (value2 < 0)
    return negate(fromNumber(-value2, unsigned));
  return fromBits$1(value2 % TWO_PWR_32_DBL | 0, value2 / TWO_PWR_32_DBL | 0, unsigned);
}
function fromBits$1(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
  if (str.length === 0)
    throw Error("empty string");
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
    return ZERO;
  if (typeof unsigned === "number") {
    radix = unsigned, unsigned = false;
  } else {
    unsigned = !!unsigned;
  }
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  var p2 = str.indexOf("-");
  if (p2 > 0)
    throw Error("interior hyphen");
  else if (p2 === 0) {
    return negate(fromString(str.substring(1), unsigned, radix));
  }
  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;
  for (var i2 = 0; i2 < str.length; i2 += 8) {
    var size = Math.min(8, str.length - i2), value2 = parseInt(str.substring(i2, i2 + size), radix);
    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = add$2(multiply(result, power), fromNumber(value2));
    } else {
      result = multiply(result, radixToPower);
      result = add$2(result, fromNumber(value2));
    }
  }
  result.unsigned = unsigned;
  return result;
}
function fromValue(val, unsigned) {
  if (typeof val === "number")
    return fromNumber(val, unsigned);
  if (typeof val === "string")
    return fromString(val, unsigned);
  return fromBits$1(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
var UZERO = fromInt(0, true);
var ONE = fromInt(1);
var UONE = fromInt(1, true);
var NEG_ONE = fromInt(-1);
var MAX_VALUE = fromBits$1(4294967295 | 0, 2147483647 | 0, false);
var MAX_UNSIGNED_VALUE = fromBits$1(4294967295 | 0, 4294967295 | 0, true);
var MIN_VALUE = fromBits$1(0, 2147483648 | 0, false);
function toInt$1($this) {
  return $this.unsigned ? $this.low >>> 0 : $this.low;
}
function toNumber($this) {
  if ($this.unsigned)
    return ($this.high >>> 0) * TWO_PWR_32_DBL + ($this.low >>> 0);
  return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
function toString$2($this, radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  if (isZero($this))
    return "0";
  if (isNegative($this)) {
    if (equals$2($this, MIN_VALUE)) {
      var radixLong = fromNumber(radix), div = divide($this, radixLong), rem1 = subtract(multiply(div, radixLong), $this);
      return toString$2(div, radix) + toInt$1(rem1).toString(radix);
    } else
      return "-" + toString$2(negate($this), radix);
  }
  var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned), rem = $this;
  var result = "";
  while (true) {
    var remDiv = divide(rem, radixToPower), intval = toInt$1(subtract(rem, multiply(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
    rem = remDiv;
    if (isZero(rem))
      return digits + result;
    else {
      while (digits.length < 6)
        digits = "0" + digits;
      result = "" + digits + result;
    }
  }
}
function isZero($this) {
  return $this.high === 0 && $this.low === 0;
}
function isNegative($this) {
  return !$this.unsigned && $this.high < 0;
}
function isOdd($this) {
  return ($this.low & 1) === 1;
}
function equals$2($this, other) {
  if (!isLong(other))
    other = fromValue(other);
  if ($this.unsigned !== other.unsigned && $this.high >>> 31 === 1 && other.high >>> 31 === 1)
    return false;
  return $this.high === other.high && $this.low === other.low;
}
function lessThan($this, other) {
  return compare$2($this, other) < 0;
}
function greaterThan($this, other) {
  return compare$2($this, other) > 0;
}
function greaterThanOrEqual($this, other) {
  return compare$2($this, other) >= 0;
}
function compare$2($this, other) {
  if (!isLong(other))
    other = fromValue(other);
  if (equals$2($this, other))
    return 0;
  var thisNeg = isNegative($this), otherNeg = isNegative(other);
  if (thisNeg && !otherNeg)
    return -1;
  if (!thisNeg && otherNeg)
    return 1;
  if (!$this.unsigned)
    return isNegative(subtract($this, other)) ? -1 : 1;
  return other.high >>> 0 > $this.high >>> 0 || other.high === $this.high && other.low >>> 0 > $this.low >>> 0 ? -1 : 1;
}
function negate($this) {
  if (!$this.unsigned && equals$2($this, MIN_VALUE))
    return MIN_VALUE;
  return add$2(not($this), ONE);
}
function add$2($this, addend) {
  if (!isLong(addend))
    addend = fromValue(addend);
  var a48 = $this.high >>> 16;
  var a32 = $this.high & 65535;
  var a16 = $this.low >>> 16;
  var a00 = $this.low & 65535;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 65535;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 + b48;
  c48 &= 65535;
  return fromBits$1(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function subtract($this, subtrahend) {
  if (!isLong(subtrahend))
    subtrahend = fromValue(subtrahend);
  return add$2($this, negate(subtrahend));
}
function multiply($this, multiplier) {
  if (isZero($this))
    return $this.unsigned ? UZERO : ZERO;
  if (!isLong(multiplier))
    multiplier = fromValue(multiplier);
  if (wasm) {
    var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
    return fromBits$1(low, wasm.get_high(), $this.unsigned);
  }
  if (isZero(multiplier))
    return $this.unsigned ? UZERO : ZERO;
  if (equals$2($this, MIN_VALUE))
    return isOdd(multiplier) ? MIN_VALUE : ZERO;
  if (equals$2(multiplier, MIN_VALUE))
    return isOdd($this) ? MIN_VALUE : ZERO;
  if (isNegative($this)) {
    if (isNegative(multiplier))
      return multiply(negate($this), negate(multiplier));
    else
      return negate(multiply(negate($this), multiplier));
  } else if (isNegative(multiplier))
    return negate(multiply($this, negate(multiplier)));
  if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24))
    return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned);
  var a48 = $this.high >>> 16;
  var a32 = $this.high & 65535;
  var a16 = $this.low >>> 16;
  var a00 = $this.low & 65535;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 65535;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 65535;
  return fromBits$1(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function divide($this, divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (isZero(divisor))
    throw Error("division by zero");
  if (wasm) {
    if (!$this.unsigned && $this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
      return $this;
    }
    var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
    return fromBits$1(low, wasm.get_high(), $this.unsigned);
  }
  if (isZero($this))
    return $this.unsigned ? UZERO : ZERO;
  var approx, rem, res;
  if (!$this.unsigned) {
    if (equals$2($this, MIN_VALUE)) {
      if (equals$2(divisor, ONE) || equals$2(divisor, NEG_ONE))
        return MIN_VALUE;
      else if (equals$2(divisor, MIN_VALUE))
        return ONE;
      else {
        var halfThis = shiftRight($this, 1);
        approx = shiftLeft(divide(halfThis, divisor), 1);
        if (equals$2(approx, ZERO)) {
          return isNegative(divisor) ? ONE : NEG_ONE;
        } else {
          rem = subtract($this, multiply(divisor, approx));
          res = add$2(approx, divide(rem, divisor));
          return res;
        }
      }
    } else if (equals$2(divisor, MIN_VALUE))
      return $this.unsigned ? UZERO : ZERO;
    if (isNegative($this)) {
      if (isNegative(divisor))
        return divide(negate($this), negate(divisor));
      return negate(divide(negate($this), divisor));
    } else if (isNegative(divisor))
      return negate(divide($this, negate(divisor)));
    res = ZERO;
  } else {
    if (!divisor.unsigned)
      divisor = toUnsigned(divisor);
    if (greaterThan(divisor, $this))
      return UZERO;
    if (greaterThan(divisor, shiftRightUnsigned($this, 1)))
      return UONE;
    res = UZERO;
  }
  rem = $this;
  while (greaterThanOrEqual(rem, divisor)) {
    approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor)));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = multiply(approxRes, divisor);
    while (isNegative(approxRem) || greaterThan(approxRem, rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, $this.unsigned);
      approxRem = multiply(approxRes, divisor);
    }
    if (isZero(approxRes))
      approxRes = ONE;
    res = add$2(res, approxRes);
    rem = subtract(rem, approxRem);
  }
  return res;
}
function modulo($this, divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (wasm) {
    var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
    return fromBits$1(low, wasm.get_high(), $this.unsigned);
  }
  return subtract($this, multiply(divide($this, divisor), divisor));
}
function not($this) {
  return fromBits$1(~$this.low, ~$this.high, $this.unsigned);
}
function and($this, other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits$1($this.low & other.low, $this.high & other.high, $this.unsigned);
}
function shiftLeft($this, numBits) {
  if (isLong(numBits))
    numBits = toInt$1(numBits);
  if ((numBits &= 63) === 0)
    return $this;
  else if (numBits < 32)
    return fromBits$1($this.low << numBits, $this.high << numBits | $this.low >>> 32 - numBits, $this.unsigned);
  else
    return fromBits$1(0, $this.low << numBits - 32, $this.unsigned);
}
function shiftRight($this, numBits) {
  if (isLong(numBits))
    numBits = toInt$1(numBits);
  if ((numBits &= 63) === 0)
    return $this;
  else if (numBits < 32)
    return fromBits$1($this.low >>> numBits | $this.high << 32 - numBits, $this.high >> numBits, $this.unsigned);
  else
    return fromBits$1($this.high >> numBits - 32, $this.high >= 0 ? 0 : -1, $this.unsigned);
}
function shiftRightUnsigned($this, numBits) {
  if (isLong(numBits))
    numBits = toInt$1(numBits);
  numBits &= 63;
  if (numBits === 0)
    return $this;
  else {
    var high = $this.high;
    if (numBits < 32) {
      var low = $this.low;
      return fromBits$1(low >>> numBits | high << 32 - numBits, high >>> numBits, $this.unsigned);
    } else if (numBits === 32)
      return fromBits$1(high, 0, $this.unsigned);
    else
      return fromBits$1(high >>> numBits - 32, 0, $this.unsigned);
  }
}
function toUnsigned($this) {
  if ($this.unsigned)
    return $this;
  return fromBits$1($this.low, $this.high, true);
}
function toBytes($this, le) {
  return le ? toBytesLE($this) : toBytesBE($this);
}
function toBytesLE($this) {
  var hi = $this.high, lo = $this.low;
  return [
    lo & 255,
    lo >>> 8 & 255,
    lo >>> 16 & 255,
    lo >>> 24,
    hi & 255,
    hi >>> 8 & 255,
    hi >>> 16 & 255,
    hi >>> 24
  ];
}
function toBytesBE($this) {
  var hi = $this.high, lo = $this.low;
  return [
    hi >>> 24,
    hi >>> 16 & 255,
    hi >>> 8 & 255,
    hi & 255,
    lo >>> 24,
    lo >>> 16 & 255,
    lo >>> 8 & 255,
    lo & 255
  ];
}
function fromBytes(bytes, unsigned, le) {
  return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
function fromBytesLE(bytes, unsigned) {
  return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
}
function fromBytesBE(bytes, unsigned) {
  return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
}
const op_Addition = add$2;
const op_Multiply = multiply;
const op_Division = divide;
const op_Modulus = modulo;
const op_UnaryNegation = negate;
const op_BitwiseAnd = and;
const equals$1 = equals$2;
const compare$1 = compare$2;
const fromBits = fromBits$1;
const toInt = toInt$1;
function fromInteger(value2, unsigned, kind) {
  let x2 = value2;
  let xh = 0;
  switch (kind) {
    case 0:
      x2 = value2 << 24 >> 24;
      xh = x2;
      break;
    case 4:
      x2 = value2 << 24 >>> 24;
      break;
    case 1:
      x2 = value2 << 16 >> 16;
      xh = x2;
      break;
    case 5:
      x2 = value2 << 16 >>> 16;
      break;
    case 2:
      x2 = value2 >> 0;
      xh = x2;
      break;
    case 6:
      x2 = value2 >>> 0;
      break;
  }
  return fromBits$1(x2, xh >> 31, unsigned);
}
function isArrayLike(x2) {
  return Array.isArray(x2) || ArrayBuffer.isView(x2);
}
function isComparable(x2) {
  return typeof x2.CompareTo === "function";
}
function isEquatable(x2) {
  return typeof x2.Equals === "function";
}
function isHashable(x2) {
  return typeof x2.GetHashCode === "function";
}
function isDisposable(x2) {
  return x2 != null && typeof x2.Dispose === "function";
}
function sameConstructor(x2, y) {
  return Object.getPrototypeOf(x2).constructor === Object.getPrototypeOf(y).constructor;
}
class Enumerator {
  constructor(iter) {
    this.iter = iter;
  }
  ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
    return this.current;
  }
  ["System.Collections.IEnumerator.get_Current"]() {
    return this.current;
  }
  ["System.Collections.IEnumerator.MoveNext"]() {
    const cur = this.iter.next();
    this.current = cur.value;
    return !cur.done;
  }
  ["System.Collections.IEnumerator.Reset"]() {
    throw new Error("JS iterators cannot be reset");
  }
  Dispose() {
    return;
  }
}
function getEnumerator(o2) {
  return typeof o2.GetEnumerator === "function" ? o2.GetEnumerator() : new Enumerator(o2[Symbol.iterator]());
}
function toIterator(en) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
      const current = hasNext ? en["System.Collections.IEnumerator.get_Current"]() : void 0;
      return { done: !hasNext, value: current };
    }
  };
}
function padWithZeros(i2, length2) {
  let str = i2.toString(10);
  while (str.length < length2) {
    str = "0" + str;
  }
  return str;
}
function dateOffset(date) {
  const date1 = date;
  return typeof date1.offset === "number" ? date1.offset : date.kind === 1 ? 0 : date.getTimezoneOffset() * -6e4;
}
function int32ToString(i2, radix) {
  i2 = i2 < 0 && radix != null && radix !== 10 ? 4294967295 + i2 + 1 : i2;
  return i2.toString(radix);
}
class ObjectRef {
  static id(o2) {
    if (!ObjectRef.idMap.has(o2)) {
      ObjectRef.idMap.set(o2, ++ObjectRef.count);
    }
    return ObjectRef.idMap.get(o2);
  }
}
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function stringHash(s2) {
  let i2 = 0;
  let h2 = 5381;
  const len = s2.length;
  while (i2 < len) {
    h2 = h2 * 33 ^ s2.charCodeAt(i2++);
  }
  return h2;
}
function numberHash(x2) {
  return x2 * 2654435761 | 0;
}
function combineHashCodes(hashes) {
  if (hashes.length === 0) {
    return 0;
  }
  return hashes.reduce((h1, h2) => {
    return (h1 << 5) + h1 ^ h2;
  });
}
function dateHash(x2) {
  return x2.getTime();
}
function arrayHash(x2) {
  const len = x2.length;
  const hashes = new Array(len);
  for (let i2 = 0; i2 < len; i2++) {
    hashes[i2] = structuralHash(x2[i2]);
  }
  return combineHashCodes(hashes);
}
function structuralHash(x2) {
  if (x2 == null) {
    return 0;
  }
  switch (typeof x2) {
    case "boolean":
      return x2 ? 1 : 0;
    case "number":
      return numberHash(x2);
    case "string":
      return stringHash(x2);
    default: {
      if (isHashable(x2)) {
        return x2.GetHashCode();
      } else if (isArrayLike(x2)) {
        return arrayHash(x2);
      } else if (x2 instanceof Date) {
        return dateHash(x2);
      } else if (Object.getPrototypeOf(x2).constructor === Object) {
        const hashes = Object.values(x2).map((v2) => structuralHash(v2));
        return combineHashCodes(hashes);
      } else {
        return numberHash(ObjectRef.id(x2));
      }
    }
  }
}
function equalArraysWith(x2, y, eq) {
  if (x2 == null) {
    return y == null;
  }
  if (y == null) {
    return false;
  }
  if (x2.length !== y.length) {
    return false;
  }
  for (let i2 = 0; i2 < x2.length; i2++) {
    if (!eq(x2[i2], y[i2])) {
      return false;
    }
  }
  return true;
}
function equalArrays(x2, y) {
  return equalArraysWith(x2, y, equals);
}
function equalObjects(x2, y) {
  const xKeys = Object.keys(x2);
  const yKeys = Object.keys(y);
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  xKeys.sort();
  yKeys.sort();
  for (let i2 = 0; i2 < xKeys.length; i2++) {
    if (xKeys[i2] !== yKeys[i2] || !equals(x2[xKeys[i2]], y[yKeys[i2]])) {
      return false;
    }
  }
  return true;
}
function equals(x2, y) {
  if (x2 === y) {
    return true;
  } else if (x2 == null) {
    return y == null;
  } else if (y == null) {
    return false;
  } else if (typeof x2 !== "object") {
    return false;
  } else if (isEquatable(x2)) {
    return x2.Equals(y);
  } else if (isArrayLike(x2)) {
    return isArrayLike(y) && equalArrays(x2, y);
  } else if (x2 instanceof Date) {
    return y instanceof Date && compareDates(x2, y) === 0;
  } else {
    return Object.getPrototypeOf(x2).constructor === Object && equalObjects(x2, y);
  }
}
function compareDates(x2, y) {
  let xtime;
  let ytime;
  if ("offset" in x2 && "offset" in y) {
    xtime = x2.getTime();
    ytime = y.getTime();
  } else {
    xtime = x2.getTime() + dateOffset(x2);
    ytime = y.getTime() + dateOffset(y);
  }
  return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
function comparePrimitives(x2, y) {
  return x2 === y ? 0 : x2 < y ? -1 : 1;
}
function compareArraysWith(x2, y, comp) {
  if (x2 == null) {
    return y == null ? 0 : 1;
  }
  if (y == null) {
    return -1;
  }
  if (x2.length !== y.length) {
    return x2.length < y.length ? -1 : 1;
  }
  for (let i2 = 0, j = 0; i2 < x2.length; i2++) {
    j = comp(x2[i2], y[i2]);
    if (j !== 0) {
      return j;
    }
  }
  return 0;
}
function compareArrays(x2, y) {
  return compareArraysWith(x2, y, compare);
}
function compareObjects(x2, y) {
  const xKeys = Object.keys(x2);
  const yKeys = Object.keys(y);
  if (xKeys.length !== yKeys.length) {
    return xKeys.length < yKeys.length ? -1 : 1;
  }
  xKeys.sort();
  yKeys.sort();
  for (let i2 = 0, j = 0; i2 < xKeys.length; i2++) {
    const key = xKeys[i2];
    if (key !== yKeys[i2]) {
      return key < yKeys[i2] ? -1 : 1;
    } else {
      j = compare(x2[key], y[key]);
      if (j !== 0) {
        return j;
      }
    }
  }
  return 0;
}
function compare(x2, y) {
  if (x2 === y) {
    return 0;
  } else if (x2 == null) {
    return y == null ? 0 : -1;
  } else if (y == null) {
    return 1;
  } else if (typeof x2 !== "object") {
    return x2 < y ? -1 : 1;
  } else if (isComparable(x2)) {
    return x2.CompareTo(y);
  } else if (isArrayLike(x2)) {
    return isArrayLike(y) ? compareArrays(x2, y) : -1;
  } else if (x2 instanceof Date) {
    return y instanceof Date ? compareDates(x2, y) : -1;
  } else {
    return Object.getPrototypeOf(x2).constructor === Object ? compareObjects(x2, y) : -1;
  }
}
function max(comparer, x2, y) {
  return comparer(x2, y) > 0 ? x2 : y;
}
function jsOptions(mutator) {
  const opts = {};
  mutator(opts);
  return opts;
}
function randomNext(min, max2) {
  return Math.floor(Math.random() * (max2 - min)) + min;
}
function clear(col) {
  if (isArrayLike(col)) {
    col.splice(0);
  } else {
    col.clear();
  }
}
const CURRIED = Symbol("curried");
function uncurry(arity, f2) {
  if (f2 == null || f2.length > 1) {
    return f2;
  }
  const uncurried = (...args) => {
    let res = f2;
    for (let i2 = 0; i2 < arity; i2++) {
      res = res(args[i2]);
    }
    return res;
  };
  uncurried[CURRIED] = f2;
  return uncurried;
}
function _curry(args, arity, f2) {
  return (arg) => arity === 1 ? f2(...args.concat([arg])) : _curry(args.concat([arg]), arity - 1, f2);
}
function curry(arity, f2) {
  if (f2 == null || f2.length === 1) {
    return f2;
  } else if (CURRIED in f2) {
    return f2[CURRIED];
  } else {
    return _curry([], arity, f2);
  }
}
function partialApply(arity, f2, args) {
  if (f2 == null) {
    return void 0;
  } else if (CURRIED in f2) {
    f2 = f2[CURRIED];
    for (let i2 = 0; i2 < args.length; i2++) {
      f2 = f2(args[i2]);
    }
    return f2;
  } else {
    return _curry(args, arity, f2);
  }
}
function mapCurriedArgs(fn, mappings) {
  function mapArg(fn2, arg, mappings2, idx) {
    const mapping = mappings2[idx];
    if (mapping !== 0) {
      const expectedArity = mapping[0];
      const actualArity = mapping[1];
      if (expectedArity > 1) {
        arg = curry(expectedArity, arg);
      }
      if (actualArity > 1) {
        arg = uncurry(actualArity, arg);
      }
    }
    const res = fn2(arg);
    if (idx + 1 === mappings2.length) {
      return res;
    } else {
      return (arg2) => mapArg(res, arg2, mappings2, idx + 1);
    }
  }
  return (arg) => mapArg(fn, arg, mappings, 0);
}
function dateOffsetToString(offset) {
  const isMinus = offset < 0;
  offset = Math.abs(offset);
  const hours = ~~(offset / 36e5);
  const minutes = offset % 36e5 / 6e4;
  return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function dateToHalfUTCString(date, half) {
  const str = date.toISOString();
  return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function dateToISOString(d2, utc) {
  if (utc) {
    return d2.toISOString();
  } else {
    const printOffset = d2.kind == null ? true : d2.kind === 2;
    return padWithZeros(d2.getFullYear(), 4) + "-" + padWithZeros(d2.getMonth() + 1, 2) + "-" + padWithZeros(d2.getDate(), 2) + "T" + padWithZeros(d2.getHours(), 2) + ":" + padWithZeros(d2.getMinutes(), 2) + ":" + padWithZeros(d2.getSeconds(), 2) + "." + padWithZeros(d2.getMilliseconds(), 3) + (printOffset ? dateOffsetToString(d2.getTimezoneOffset() * -6e4) : "");
  }
}
function dateToISOStringWithOffset(dateWithOffset, offset) {
  const str = dateWithOffset.toISOString();
  return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}
function dateToStringWithCustomFormat(date, format2, utc) {
  return format2.replace(/(\w)\1*/g, (match) => {
    let rep = Number.NaN;
    switch (match.substring(0, 1)) {
      case "y":
        const y = utc ? date.getUTCFullYear() : date.getFullYear();
        rep = match.length < 4 ? y % 100 : y;
        break;
      case "M":
        rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        break;
      case "d":
        rep = utc ? date.getUTCDate() : date.getDate();
        break;
      case "H":
        rep = utc ? date.getUTCHours() : date.getHours();
        break;
      case "h":
        const h2 = utc ? date.getUTCHours() : date.getHours();
        rep = h2 > 12 ? h2 % 12 : h2;
        break;
      case "m":
        rep = utc ? date.getUTCMinutes() : date.getMinutes();
        break;
      case "s":
        rep = utc ? date.getUTCSeconds() : date.getSeconds();
        break;
      case "f":
        rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        break;
    }
    if (Number.isNaN(rep)) {
      return match;
    } else {
      return rep < 10 && match.length > 1 ? "0" + rep : "" + rep;
    }
  });
}
function dateToStringWithOffset(date, format2) {
  var _a, _b, _c;
  const d2 = new Date(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0));
  if (typeof format2 !== "string") {
    return d2.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString((_b = date.offset) !== null && _b !== void 0 ? _b : 0);
  } else if (format2.length === 1) {
    switch (format2) {
      case "D":
      case "d":
        return dateToHalfUTCString(d2, "first");
      case "T":
      case "t":
        return dateToHalfUTCString(d2, "second");
      case "O":
      case "o":
        return dateToISOStringWithOffset(d2, (_c = date.offset) !== null && _c !== void 0 ? _c : 0);
      default:
        throw new Error("Unrecognized Date print format");
    }
  } else {
    return dateToStringWithCustomFormat(d2, format2, true);
  }
}
function dateToStringWithKind(date, format2) {
  const utc = date.kind === 1;
  if (typeof format2 !== "string") {
    return utc ? date.toUTCString() : date.toLocaleString();
  } else if (format2.length === 1) {
    switch (format2) {
      case "D":
      case "d":
        return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();
      case "T":
      case "t":
        return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();
      case "O":
      case "o":
        return dateToISOString(date, utc);
      default:
        throw new Error("Unrecognized Date print format");
    }
  } else {
    return dateToStringWithCustomFormat(date, format2, utc);
  }
}
function toString$1(date, format2, _provider) {
  return date.offset != null ? dateToStringWithOffset(date, format2) : dateToStringWithKind(date, format2);
}
function seqToString(self) {
  let count2 = 0;
  let str = "[";
  for (const x2 of self) {
    if (count2 === 0) {
      str += toString(x2);
    } else if (count2 === 100) {
      str += "; ...";
      break;
    } else {
      str += "; " + toString(x2);
    }
    count2++;
  }
  return str + "]";
}
function toString(x2, callStack = 0) {
  if (x2 != null && typeof x2 === "object") {
    if (typeof x2.toString === "function") {
      return x2.toString();
    } else if (Symbol.iterator in x2) {
      return seqToString(x2);
    } else {
      const cons2 = Object.getPrototypeOf(x2).constructor;
      return cons2 === Object && callStack < 10 ? "{ " + Object.entries(x2).map(([k2, v2]) => k2 + " = " + toString(v2, callStack + 1)).join("\n  ") + " }" : cons2.name;
    }
  }
  return String(x2);
}
function unionToString(name, fields) {
  if (fields.length === 0) {
    return name;
  } else {
    let fieldStr = "";
    let withParens = true;
    if (fields.length === 1) {
      fieldStr = toString(fields[0]);
      withParens = fieldStr.indexOf(" ") >= 0;
    } else {
      fieldStr = fields.map((x2) => toString(x2)).join(", ");
    }
    return name + (withParens ? " (" : " ") + fieldStr + (withParens ? ")" : "");
  }
}
class Union {
  get name() {
    return this.cases()[this.tag];
  }
  toJSON() {
    return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
  }
  toString() {
    return unionToString(this.name, this.fields);
  }
  GetHashCode() {
    const hashes = this.fields.map((x2) => structuralHash(x2));
    hashes.splice(0, 0, numberHash(this.tag));
    return combineHashCodes(hashes);
  }
  Equals(other) {
    if (this === other) {
      return true;
    } else if (!sameConstructor(this, other)) {
      return false;
    } else if (this.tag === other.tag) {
      return equalArrays(this.fields, other.fields);
    } else {
      return false;
    }
  }
  CompareTo(other) {
    if (this === other) {
      return 0;
    } else if (!sameConstructor(this, other)) {
      return -1;
    } else if (this.tag === other.tag) {
      return compareArrays(this.fields, other.fields);
    } else {
      return this.tag < other.tag ? -1 : 1;
    }
  }
}
function recordToJSON(self) {
  const o2 = {};
  const keys = Object.keys(self);
  for (let i2 = 0; i2 < keys.length; i2++) {
    o2[keys[i2]] = self[keys[i2]];
  }
  return o2;
}
function recordToString(self) {
  return "{ " + Object.entries(self).map(([k2, v2]) => k2 + " = " + toString(v2)).join("\n  ") + " }";
}
function recordGetHashCode(self) {
  const hashes = Object.values(self).map((v2) => structuralHash(v2));
  return combineHashCodes(hashes);
}
function recordEquals(self, other) {
  if (self === other) {
    return true;
  } else if (!sameConstructor(self, other)) {
    return false;
  } else {
    const thisNames = Object.keys(self);
    for (let i2 = 0; i2 < thisNames.length; i2++) {
      if (!equals(self[thisNames[i2]], other[thisNames[i2]])) {
        return false;
      }
    }
    return true;
  }
}
function recordCompareTo(self, other) {
  if (self === other) {
    return 0;
  } else if (!sameConstructor(self, other)) {
    return -1;
  } else {
    const thisNames = Object.keys(self);
    for (let i2 = 0; i2 < thisNames.length; i2++) {
      const result = compare(self[thisNames[i2]], other[thisNames[i2]]);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  }
}
class Record {
  toJSON() {
    return recordToJSON(this);
  }
  toString() {
    return recordToString(this);
  }
  GetHashCode() {
    return recordGetHashCode(this);
  }
  Equals(other) {
    return recordEquals(this, other);
  }
  CompareTo(other) {
    return recordCompareTo(this, other);
  }
}
class FSharpRef {
  constructor(contentsOrGetter, setter) {
    if (typeof setter === "function") {
      this.getter = contentsOrGetter;
      this.setter = setter;
    } else {
      this.getter = () => contentsOrGetter;
      this.setter = (v2) => {
        contentsOrGetter = v2;
      };
    }
  }
  get contents() {
    return this.getter();
  }
  set contents(v2) {
    this.setter(v2);
  }
}
class Attribute {
}
const fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;
const formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
function isLessThan(x2, y) {
  return compare$3(x2, y) < 0;
}
function printf(input) {
  return {
    input,
    cont: fsFormat(input)
  };
}
function continuePrint(cont, arg) {
  return typeof arg === "string" ? cont(arg) : arg.cont(cont);
}
function toText(arg) {
  return continuePrint((x2) => x2, arg);
}
function formatReplacement(rep, flags, padLength, precision, format2) {
  let sign = "";
  flags = flags || "";
  format2 = format2 || "";
  if (isNumeric(rep)) {
    if (format2.toLowerCase() !== "x") {
      if (isLessThan(rep, 0)) {
        rep = multiply$1(rep, -1);
        sign = "-";
      } else {
        if (flags.indexOf(" ") >= 0) {
          sign = " ";
        } else if (flags.indexOf("+") >= 0) {
          sign = "+";
        }
      }
    }
    precision = precision == null ? null : parseInt(precision, 10);
    switch (format2) {
      case "f":
      case "F":
        precision = precision != null ? precision : 6;
        rep = toFixed(rep, precision);
        break;
      case "g":
      case "G":
        rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
        break;
      case "e":
      case "E":
        rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
        break;
      case "x":
        rep = toHex(rep);
        break;
      case "X":
        rep = toHex(rep).toUpperCase();
        break;
      default:
        rep = String(rep);
        break;
    }
  } else if (rep instanceof Date) {
    rep = toString$1(rep);
  } else {
    rep = toString(rep);
  }
  padLength = typeof padLength === "number" ? padLength : parseInt(padLength, 10);
  if (!isNaN(padLength)) {
    const zeroFlag = flags.indexOf("0") >= 0;
    const minusFlag = flags.indexOf("-") >= 0;
    const ch = minusFlag || !zeroFlag ? " " : "0";
    if (ch === "0") {
      rep = padLeft(rep, padLength - sign.length, ch, minusFlag);
      rep = sign + rep;
    } else {
      rep = padLeft(sign + rep, padLength, ch, minusFlag);
    }
  } else {
    rep = sign + rep;
  }
  return rep;
}
function createPrinter(cont, _strParts, _matches, _result = "", padArg = -1) {
  return (...args) => {
    let result = _result;
    const strParts = _strParts.slice();
    const matches = _matches.slice();
    for (const arg of args) {
      const [, , flags, _padLength, precision, format2] = matches[0];
      let padLength = _padLength;
      if (padArg >= 0) {
        padLength = padArg;
        padArg = -1;
      } else if (padLength === "*") {
        if (arg < 0) {
          throw new Error("Non-negative number required");
        }
        padArg = arg;
        continue;
      }
      result += strParts[0];
      result += formatReplacement(arg, flags, padLength, precision, format2);
      strParts.splice(0, 1);
      matches.splice(0, 1);
    }
    if (matches.length === 0) {
      result += strParts[0];
      return cont(result);
    } else {
      return createPrinter(cont, strParts, matches, result, padArg);
    }
  };
}
function fsFormat(str) {
  return (cont) => {
    fsFormatRegExp.lastIndex = 0;
    const strParts = [];
    const matches = [];
    let strIdx = 0;
    let match = fsFormatRegExp.exec(str);
    while (match) {
      const matchIndex = match.index + (match[1] || "").length;
      strParts.push(str.substring(strIdx, matchIndex).replace(/%%/g, "%"));
      matches.push(match);
      strIdx = fsFormatRegExp.lastIndex;
      fsFormatRegExp.lastIndex -= 1;
      match = fsFormatRegExp.exec(str);
    }
    if (strParts.length === 0) {
      return cont(str.replace(/%%/g, "%"));
    } else {
      strParts.push(str.substring(strIdx).replace(/%%/g, "%"));
      return createPrinter(cont, strParts, matches);
    }
  };
}
function format(str, ...args) {
  if (typeof str === "object" && args.length > 0) {
    str = args[0];
    args.shift();
  }
  return str.replace(formatRegExp, (_2, idx, padLength, format2, precision, pattern) => {
    let rep = args[idx];
    if (isNumeric(rep)) {
      precision = precision == null ? null : parseInt(precision, 10);
      switch (format2) {
        case "f":
        case "F":
          precision = precision != null ? precision : 2;
          rep = toFixed(rep, precision);
          break;
        case "g":
        case "G":
          rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
          break;
        case "e":
        case "E":
          rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
          break;
        case "p":
        case "P":
          precision = precision != null ? precision : 2;
          rep = toFixed(multiply$1(rep, 100), precision) + " %";
          break;
        case "d":
        case "D":
          rep = precision != null ? padLeft(String(rep), precision, "0") : String(rep);
          break;
        case "x":
        case "X":
          rep = precision != null ? padLeft(toHex(rep), precision, "0") : toHex(rep);
          if (format2 === "X") {
            rep = rep.toUpperCase();
          }
          break;
        default:
          if (pattern) {
            let sign = "";
            rep = pattern.replace(/([0#,]+)(\.[0#]+)?/, (_3, intPart, decimalPart) => {
              if (isLessThan(rep, 0)) {
                rep = multiply$1(rep, -1);
                sign = "-";
              }
              const decimalPartLength = decimalPart != null ? decimalPart.length : 0;
              rep = toFixed(rep, Math.max(decimalPartLength - 1, 0));
              if (intPart.indexOf(",") > 0) {
                const [intPart2, decimalPart2] = rep.split(".");
                const i2 = intPart2.length % 3;
                const thousandGroups = Math.floor(intPart2.length / 3);
                let thousands = i2 > 0 ? intPart2.substr(0, i2) + (thousandGroups > 0 ? "," : "") : "";
                for (let j = 0; j < thousandGroups; j++) {
                  thousands += intPart2.substr(i2 + j * 3, 3) + (j < thousandGroups - 1 ? "," : "");
                }
                rep = decimalPart2 ? thousands + "." + decimalPart2 : thousands;
              }
              intPart = intPart.replace(/,/g, "");
              const intPartLength = intPart.length > 0 && intPart[0] === "0" ? intPart.length : 0;
              return padLeft(rep, intPartLength - sign.length + decimalPartLength, "0");
            });
            rep = sign + rep;
          }
      }
    } else if (rep instanceof Date) {
      rep = toString$1(rep, pattern || format2);
    } else {
      rep = toString(rep);
    }
    padLength = parseInt((padLength || " ").substring(1), 10);
    if (!isNaN(padLength)) {
      rep = padLeft(String(rep), Math.abs(padLength), " ", padLength < 0);
    }
    return rep;
  });
}
function join(delimiter, xs) {
  if (Array.isArray(xs)) {
    return xs.join(delimiter);
  } else {
    return Array.from(xs).join(delimiter);
  }
}
function padLeft(str, len, ch, isRight) {
  ch = ch || " ";
  len = len - str.length;
  for (let i2 = 0; i2 < len; i2++) {
    str = isRight ? str + ch : ch + str;
  }
  return str;
}
function fmt(strs, ...args) {
  return { strs, args };
}
var P$1 = {
  GetHashCode() {
    return combineHashCodes([this.s, this.e].concat(this.c));
  },
  Equals(x2) {
    return !this.cmp(x2);
  },
  CompareTo(x2) {
    return this.cmp(x2);
  },
  [symbol]() {
    const _this = this;
    return {
      multiply: (y) => _this.mul(y),
      toPrecision: (sd) => _this.toPrecision(sd),
      toExponential: (dp) => _this.toExponential(dp),
      toFixed: (dp) => _this.toFixed(dp),
      toHex: () => (Number(_this) >>> 0).toString(16)
    };
  }
};
var DP = 28, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -29, PE = 29, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
  function Big2(n2) {
    var x2 = this;
    if (!(x2 instanceof Big2))
      return n2 === UNDEFINED ? _Big_() : new Big2(n2);
    if (n2 instanceof Big2) {
      x2.s = n2.s;
      x2.e = n2.e;
      x2.c = n2.c.slice();
      normalize(x2);
    } else {
      if (typeof n2 !== "string") {
        if (Big2.strict === true) {
          throw TypeError(INVALID + "number");
        }
        n2 = n2 === 0 && 1 / n2 < 0 ? "-0" : String(n2);
      }
      parse(x2, n2);
    }
    x2.constructor = Big2;
  }
  Big2.prototype = P$1;
  Big2.DP = DP;
  Big2.RM = RM;
  Big2.NE = NE;
  Big2.PE = PE;
  Big2.strict = STRICT;
  return Big2;
}
function normalize(x2) {
  if (x2.c.length > 1 && !x2.c[0]) {
    let i2 = x2.c.findIndex((x3) => x3);
    x2.c = x2.c.slice(i2);
    x2.e = x2.e - i2;
  }
}
function parse(x2, n2) {
  var e2, i2, nl;
  if (!NUMERIC.test(n2)) {
    throw Error(INVALID + "number");
  }
  x2.s = n2.charAt(0) == "-" ? (n2 = n2.slice(1), -1) : 1;
  if ((e2 = n2.indexOf(".")) > -1)
    n2 = n2.replace(".", "");
  if ((i2 = n2.search(/e/i)) > 0) {
    if (e2 < 0)
      e2 = i2;
    e2 += +n2.slice(i2 + 1);
    n2 = n2.substring(0, i2);
  } else if (e2 < 0) {
    e2 = n2.length;
  }
  nl = n2.length;
  for (i2 = 0; i2 < e2 && i2 < nl && n2.charAt(i2) == "0"; )
    ++i2;
  if (i2 == nl) {
    x2.c = [x2.e = 0];
  } else {
    x2.e = e2 - i2 - 1;
    x2.c = [];
    for (e2 = 0; i2 < nl; )
      x2.c[e2++] = +n2.charAt(i2++);
  }
  x2 = round(x2, Big.DP + 1, Big.RM);
  return x2;
}
function round(x2, sd, rm, more) {
  var xc = x2.c;
  if (rm === UNDEFINED)
    rm = Big.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      x2.e = x2.e - sd + 1;
      xc[0] = 1;
    } else {
      xc[0] = x2.e = 0;
    }
  } else if (sd < xc.length) {
    const isZero2 = xc.findIndex((xci, idx) => idx >= sd && xci > 0) < 0;
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !isZero2);
    xc.length = sd--;
    if (more) {
      for (; ++xc[sd] > 9; ) {
        xc[sd] = 0;
        if (!sd--) {
          ++x2.e;
          xc.unshift(1);
        }
      }
    }
    for (sd = xc.length; !xc[--sd]; )
      xc.pop();
  }
  return x2;
}
function stringify(x2, doExponential, isNonzero) {
  var e2 = x2.e, s2 = x2.c.join(""), n2 = s2.length;
  if (doExponential) {
    s2 = s2.charAt(0) + (n2 > 1 ? "." + s2.slice(1) : "") + (e2 < 0 ? "e" : "e+") + e2;
  } else if (e2 < 0) {
    for (; ++e2; )
      s2 = "0" + s2;
    s2 = "0." + s2;
  } else if (e2 > 0) {
    if (++e2 > n2) {
      for (e2 -= n2; e2--; )
        s2 += "0";
    } else if (e2 < n2) {
      s2 = s2.slice(0, e2) + "." + s2.slice(e2);
    }
  } else if (n2 > 1) {
    s2 = s2.charAt(0) + "." + s2.slice(1);
  }
  return x2.s < 0 && isNonzero ? "-" + s2 : s2;
}
P$1.abs = function() {
  var x2 = new this.constructor(this);
  x2.s = 1;
  return x2;
};
P$1.cmp = function(y) {
  var isneg, Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y), xc = x2.c, yc = y.c, i2 = x2.s, j = y.s, k2 = x2.e, l2 = y.e;
  if (!xc[0] || !yc[0])
    return !xc[0] ? !yc[0] ? 0 : -j : i2;
  if (i2 != j)
    return i2;
  isneg = i2 < 0;
  if (k2 != l2)
    return k2 > l2 ^ isneg ? 1 : -1;
  j = Math.max(xc.length, yc.length);
  for (i2 = 0; i2 < j; i2++) {
    k2 = i2 < xc.length ? xc[i2] : 0;
    l2 = i2 < yc.length ? yc[i2] : 0;
    if (k2 != l2)
      return k2 > l2 ^ isneg ? 1 : -1;
  }
  return 0;
};
P$1.div = function(y) {
  var Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y), a2 = x2.c, b2 = y.c, k2 = x2.s == y.s ? 1 : -1, dp = Big2.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  if (!b2[0]) {
    throw Error(DIV_BY_ZERO);
  }
  if (!a2[0]) {
    y.s = k2;
    y.c = [y.e = 0];
    return y;
  }
  var bl, bt, n2, cmp, ri, bz = b2.slice(), ai = bl = b2.length, al = a2.length, r2 = a2.slice(0, bl), rl = r2.length, q = y, qc = q.c = [], qi = 0, p2 = dp + (q.e = x2.e - y.e) + 1;
  q.s = k2;
  k2 = p2 < 0 ? 0 : p2;
  bz.unshift(0);
  for (; rl++ < bl; )
    r2.push(0);
  do {
    for (n2 = 0; n2 < 10; n2++) {
      if (bl != (rl = r2.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl; ) {
          if (b2[ri] != r2[ri]) {
            cmp = b2[ri] > r2[ri] ? 1 : -1;
            break;
          }
        }
      }
      if (cmp < 0) {
        for (bt = rl == bl ? b2 : bz; rl; ) {
          if (r2[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r2[--ri]; )
              r2[ri] = 9;
            --r2[ri];
            r2[rl] += 10;
          }
          r2[rl] -= bt[rl];
        }
        for (; !r2[0]; )
          r2.shift();
      } else {
        break;
      }
    }
    qc[qi++] = cmp ? n2 : ++n2;
    if (r2[0] && cmp)
      r2[rl] = a2[ai] || 0;
    else
      r2 = [a2[ai]];
  } while ((ai++ < al || r2[0] !== UNDEFINED) && k2--);
  if (!qc[0] && qi != 1) {
    qc.shift();
    q.e--;
    p2--;
  }
  if (qi > p2)
    round(q, p2, Big2.RM, r2[0] !== UNDEFINED);
  return q;
};
P$1.eq = function(y) {
  return this.cmp(y) === 0;
};
P$1.gt = function(y) {
  return this.cmp(y) > 0;
};
P$1.gte = function(y) {
  return this.cmp(y) > -1;
};
P$1.lt = function(y) {
  return this.cmp(y) < 0;
};
P$1.lte = function(y) {
  return this.cmp(y) < 1;
};
P$1.minus = P$1.sub = function(y) {
  var i2, j, t2, xlty, Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y), a2 = x2.s, b2 = y.s;
  if (a2 != b2) {
    y.s = -b2;
    return x2.plus(y);
  }
  var xc = x2.c.slice(), xe = x2.e, yc = y.c, ye = y.e;
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b2;
    } else if (xc[0]) {
      y = new Big2(x2);
    } else {
      y.s = 1;
    }
    return y;
  }
  if (a2 = xe - ye) {
    if (xlty = a2 < 0) {
      a2 = -a2;
      t2 = xc;
    } else {
      ye = xe;
      t2 = yc;
    }
    t2.reverse();
    for (b2 = a2; b2--; )
      t2.push(0);
    t2.reverse();
  } else {
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a2 = b2 = 0; b2 < j; b2++) {
      if (xc[b2] != yc[b2]) {
        xlty = xc[b2] < yc[b2];
        break;
      }
    }
  }
  if (xlty) {
    t2 = xc;
    xc = yc;
    yc = t2;
    y.s = -y.s;
  }
  if ((b2 = (j = yc.length) - (i2 = xc.length)) > 0)
    for (; b2--; )
      xc[i2++] = 0;
  for (b2 = i2; j > a2; ) {
    if (xc[--j] < yc[j]) {
      for (i2 = j; i2 && !xc[--i2]; )
        xc[i2] = 9;
      --xc[i2];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }
  for (; xc[--b2] === 0; )
    xc.pop();
  for (; xc[0] === 0; ) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    y.s = 1;
    xc = [ye = 0];
  }
  y.c = xc;
  y.e = ye;
  return y;
};
P$1.mod = function(y) {
  var ygtx, Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y), a2 = x2.s, b2 = y.s;
  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x2.s = y.s = 1;
  ygtx = y.cmp(x2) == 1;
  x2.s = a2;
  y.s = b2;
  if (ygtx)
    return new Big2(x2);
  a2 = Big2.DP;
  b2 = Big2.RM;
  Big2.DP = Big2.RM = 0;
  x2 = x2.div(y);
  Big2.DP = a2;
  Big2.RM = b2;
  return this.minus(x2.times(y));
};
P$1.plus = P$1.add = function(y) {
  var e2, k2, t2, Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y);
  if (x2.s != y.s) {
    y.s = -y.s;
    return x2.minus(y);
  }
  var xe = x2.e, xc = x2.c, ye = y.e, yc = y.c;
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big2(x2);
      } else {
        y.s = x2.s;
      }
    }
    return y;
  }
  xc = xc.slice();
  if (e2 = xe - ye) {
    if (e2 > 0) {
      ye = xe;
      t2 = yc;
    } else {
      e2 = -e2;
      t2 = xc;
    }
    t2.reverse();
    for (; e2--; )
      t2.push(0);
    t2.reverse();
  }
  if (xc.length - yc.length < 0) {
    t2 = yc;
    yc = xc;
    xc = t2;
  }
  e2 = yc.length;
  for (k2 = 0; e2; xc[e2] %= 10)
    k2 = (xc[--e2] = xc[e2] + yc[e2] + k2) / 10 | 0;
  if (k2) {
    xc.unshift(k2);
    ++ye;
  }
  for (e2 = xc.length; xc[--e2] === 0; )
    xc.pop();
  y.c = xc;
  y.e = ye;
  return y;
};
P$1.pow = function(n2) {
  var Big2 = this.constructor, x2 = new Big2(this), y = new Big2("1"), one = new Big2("1"), isneg = n2 < 0;
  if (n2 !== ~~n2 || n2 < -MAX_POWER || n2 > MAX_POWER) {
    throw Error(INVALID + "exponent");
  }
  if (isneg)
    n2 = -n2;
  for (; ; ) {
    if (n2 & 1)
      y = y.times(x2);
    n2 >>= 1;
    if (!n2)
      break;
    x2 = x2.times(x2);
  }
  return isneg ? one.div(y) : y;
};
P$1.prec = function(sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + "precision");
  }
  return round(new this.constructor(this), sd, rm);
};
P$1.round = function(dp, rm) {
  if (dp === UNDEFINED)
    dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};
P$1.sqrt = function() {
  var r2, c2, t2, Big2 = this.constructor, x2 = new Big2(this), s2 = x2.s, e2 = x2.e, half = new Big2("0.5");
  if (!x2.c[0])
    return new Big2(x2);
  if (s2 < 0) {
    throw Error(NAME + "No square root");
  }
  s2 = Math.sqrt(x2 + "");
  if (s2 === 0 || s2 === 1 / 0) {
    c2 = x2.c.join("");
    if (!(c2.length + e2 & 1))
      c2 += "0";
    s2 = Math.sqrt(c2);
    e2 = ((e2 + 1) / 2 | 0) - (e2 < 0 || e2 & 1);
    r2 = new Big2((s2 == 1 / 0 ? "5e" : (s2 = s2.toExponential()).slice(0, s2.indexOf("e") + 1)) + e2);
  } else {
    r2 = new Big2(s2 + "");
  }
  e2 = r2.e + (Big2.DP += 4);
  do {
    t2 = r2;
    r2 = half.times(t2.plus(x2.div(t2)));
  } while (t2.c.slice(0, e2).join("") !== r2.c.slice(0, e2).join(""));
  return round(r2, (Big2.DP -= 4) + r2.e + 1, Big2.RM);
};
P$1.times = P$1.mul = function(y) {
  var c2, Big2 = this.constructor, x2 = new Big2(this), y = new Big2(y), xc = x2.c, yc = y.c, a2 = xc.length, b2 = yc.length, i2 = x2.e, j = y.e;
  y.s = x2.s == y.s ? 1 : -1;
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }
  y.e = i2 + j;
  if (a2 < b2) {
    c2 = xc;
    xc = yc;
    yc = c2;
    j = a2;
    a2 = b2;
    b2 = j;
  }
  for (c2 = new Array(j = a2 + b2); j--; )
    c2[j] = 0;
  for (i2 = b2; i2--; ) {
    b2 = 0;
    for (j = a2 + i2; j > i2; ) {
      b2 = c2[j] + yc[i2] * xc[j - i2 - 1] + b2;
      c2[j--] = b2 % 10;
      b2 = b2 / 10 | 0;
    }
    c2[j] = b2;
  }
  if (b2)
    ++y.e;
  else
    c2.shift();
  for (i2 = c2.length; !c2[--i2]; )
    c2.pop();
  y.c = c2;
  return y;
};
P$1.toExponential = function(dp, rm) {
  var x2 = this, n2 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), ++dp, rm);
    for (; x2.c.length < dp; )
      x2.c.push(0);
  }
  return stringify(x2, true, !!n2);
};
P$1.toFixed = function(dp, rm) {
  var x2 = this, n2 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), dp + x2.e + 1, rm);
    for (dp = dp + x2.e + 1; x2.c.length < dp; )
      x2.c.push(0);
  }
  return stringify(x2, false, !!n2);
};
P$1.toJSON = P$1.toString = function() {
  var x2 = this, Big2 = x2.constructor;
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, !!x2.c[0]);
};
P$1.toNumber = function() {
  var n2 = Number(stringify(this, true, true));
  if (this.constructor.strict === true && !this.eq(n2.toString())) {
    throw Error(NAME + "Imprecise conversion");
  }
  return n2;
};
P$1.toPrecision = function(sd, rm) {
  var x2 = this, Big2 = x2.constructor, n2 = x2.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + "precision");
    }
    x2 = round(new Big2(x2), sd, rm);
    for (; x2.c.length < sd; )
      x2.c.push(0);
  }
  return stringify(x2, sd <= x2.e || x2.e <= Big2.NE || x2.e >= Big2.PE, !!n2);
};
P$1.valueOf = function() {
  var x2 = this, Big2 = x2.constructor;
  if (Big2.strict === true) {
    throw Error(NAME + "valueOf disallowed");
  }
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, true);
};
var Big = _Big_();
new Big(0);
new Big(1);
new Big(-1);
new Big("79228162514264337593543950335");
new Big("-79228162514264337593543950335");
const SR_inputWasEmpty = "Collection was empty.";
class Some {
  constructor(value2) {
    this.value = value2;
  }
  toJSON() {
    return this.value;
  }
  toString() {
    return String(this.value);
  }
  GetHashCode() {
    return structuralHash(this.value);
  }
  Equals(other) {
    if (other == null) {
      return false;
    } else {
      return equals(this.value, other instanceof Some ? other.value : other);
    }
  }
  CompareTo(other) {
    if (other == null) {
      return 1;
    } else {
      return compare(this.value, other instanceof Some ? other.value : other);
    }
  }
}
function some(x2) {
  return x2 == null || x2 instanceof Some ? new Some(x2) : x2;
}
function value(x2) {
  if (x2 == null) {
    throw new Error("Option has no value");
  } else {
    return x2 instanceof Some ? x2.value : x2;
  }
}
function toArray$3(opt) {
  return opt == null ? [] : [value(opt)];
}
function defaultArg(opt, defaultValue) {
  return opt != null ? value(opt) : defaultValue;
}
function map$1(mapping, opt) {
  return opt != null ? some(mapping(value(opt))) : void 0;
}
function Helpers_allocateArrayFromCons(cons2, len) {
  if (typeof cons2 === "function") {
    return new cons2(len);
  } else {
    return new Array(len);
  }
}
function fill(target, targetIndex, count2, value2) {
  const start = targetIndex | 0;
  return target.fill(value2, start, start + count2);
}
function singleton$2(value2, cons2) {
  const ar = Helpers_allocateArrayFromCons(cons2, 1);
  ar[0] = value2;
  return ar;
}
function initialize$1(count2, initializer, cons2) {
  if (count2 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }
  const result = Helpers_allocateArrayFromCons(cons2, count2);
  for (let i2 = 0; i2 <= count2 - 1; i2++) {
    result[i2] = initializer(i2);
  }
  return result;
}
function copy(array) {
  return array.slice();
}
function fold$2(folder, state, array) {
  return array.reduce((delegateArg0, delegateArg1) => folder(delegateArg0, delegateArg1), state);
}
function equalsWith(equals2, array1, array2) {
  if (array1 == null) {
    if (array2 == null) {
      return true;
    } else {
      return false;
    }
  } else if (array2 == null) {
    return false;
  } else {
    let i2 = 0;
    let result = true;
    const length1 = array1.length | 0;
    const length2 = array2.length | 0;
    if (length1 > length2) {
      return false;
    } else if (length1 < length2) {
      return false;
    } else {
      while (i2 < length1 && result) {
        result = equals2(array1[i2], array2[i2]);
        i2 = i2 + 1 | 0;
      }
      return result;
    }
  }
}
function foldBack$1(folder, array, state) {
  return array.reduceRight((delegateArg0, delegateArg1) => folder(delegateArg1, delegateArg0), state);
}
function ComparisonIdentity_FromFunction(comparer) {
  return {
    Compare(x2, y) {
      return comparer(x2, y);
    }
  };
}
function ComparisonIdentity_Structural() {
  return ComparisonIdentity_FromFunction((e1, e2) => compare(e1, e2));
}
function LanguagePrimitives_FastGenericComparer() {
  return ComparisonIdentity_Structural();
}
function Operators_NullArg(x2) {
  throw new Error(x2);
}
const SR_enumerationAlreadyFinished = "Enumeration already finished.";
const SR_enumerationNotStarted = "Enumeration has not started. Call MoveNext.";
const SR_notEnoughElements = "The input sequence has an insufficient number of elements.";
const SR_resetNotSupported = "Reset is not supported on this enumerator.";
function Enumerator_noReset() {
  throw new Error(SR_resetNotSupported);
}
function Enumerator_notStarted() {
  throw new Error(SR_enumerationNotStarted);
}
function Enumerator_alreadyFinished() {
  throw new Error(SR_enumerationAlreadyFinished);
}
class Enumerator_Seq {
  constructor(f2) {
    this.f = f2;
  }
  toString() {
    const xs = this;
    const maxCount = 4;
    let i2 = 0;
    let str = "seq [";
    const e2 = getEnumerator(xs);
    try {
      while (i2 < maxCount && e2["System.Collections.IEnumerator.MoveNext"]()) {
        if (i2 > 0) {
          str = str + "; ";
        }
        str = str + toString(e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
        i2 = i2 + 1 | 0;
      }
      if (i2 === maxCount) {
        str = str + "; ...";
      }
      return str + "]";
    } finally {
      e2.Dispose();
    }
  }
  GetEnumerator() {
    const x2 = this;
    return x2.f();
  }
  [Symbol.iterator]() {
    return toIterator(this.GetEnumerator());
  }
  ["System.Collections.IEnumerable.GetEnumerator"]() {
    const x2 = this;
    return x2.f();
  }
}
function Enumerator_Seq_$ctor_673A07F2(f2) {
  return new Enumerator_Seq(f2);
}
class Enumerator_FromFunctions$1 {
  constructor(current, next, dispose) {
    this.current = current;
    this.next = next;
    this.dispose = dispose;
  }
  ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
    const __ = this;
    return __.current();
  }
  ["System.Collections.IEnumerator.get_Current"]() {
    const __ = this;
    return __.current();
  }
  ["System.Collections.IEnumerator.MoveNext"]() {
    const __ = this;
    return __.next();
  }
  ["System.Collections.IEnumerator.Reset"]() {
    Enumerator_noReset();
  }
  Dispose() {
    const __ = this;
    __.dispose();
  }
}
function Enumerator_FromFunctions$1_$ctor_58C54629(current, next, dispose) {
  return new Enumerator_FromFunctions$1(current, next, dispose);
}
function Enumerator_concat(sources) {
  let outerOpt = void 0;
  let innerOpt = void 0;
  let started = false;
  let finished = false;
  let curr = void 0;
  const finish = () => {
    finished = true;
    if (innerOpt != null) {
      const inner = innerOpt;
      try {
        inner.Dispose();
      } finally {
        innerOpt = void 0;
      }
    }
    if (outerOpt != null) {
      const outer = outerOpt;
      try {
        outer.Dispose();
      } finally {
        outerOpt = void 0;
      }
    }
  };
  return Enumerator_FromFunctions$1_$ctor_58C54629(() => {
    if (!started) {
      Enumerator_notStarted();
    } else if (finished) {
      Enumerator_alreadyFinished();
    }
    if (curr != null) {
      return value(curr);
    } else {
      return Enumerator_alreadyFinished();
    }
  }, () => {
    let copyOfStruct;
    if (!started) {
      started = true;
    }
    if (finished) {
      return false;
    } else {
      let res = void 0;
      while (res == null) {
        const matchValue = [outerOpt, innerOpt];
        if (matchValue[0] != null) {
          if (matchValue[1] != null) {
            const inner_1 = matchValue[1];
            if (inner_1["System.Collections.IEnumerator.MoveNext"]()) {
              curr = some(inner_1["System.Collections.Generic.IEnumerator`1.get_Current"]());
              res = true;
            } else {
              try {
                inner_1.Dispose();
              } finally {
                innerOpt = void 0;
              }
            }
          } else {
            const outer_1 = matchValue[0];
            if (outer_1["System.Collections.IEnumerator.MoveNext"]()) {
              const ie = outer_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
              innerOpt = (copyOfStruct = ie, getEnumerator(copyOfStruct));
            } else {
              finish();
              res = false;
            }
          }
        } else {
          outerOpt = getEnumerator(sources);
        }
      }
      return value(res);
    }
  }, () => {
    if (!finished) {
      finish();
    }
  });
}
function Enumerator_enumerateThenFinally(f2, e2) {
  return Enumerator_FromFunctions$1_$ctor_58C54629(() => e2["System.Collections.Generic.IEnumerator`1.get_Current"](), () => e2["System.Collections.IEnumerator.MoveNext"](), () => {
    try {
      e2.Dispose();
    } finally {
      f2();
    }
  });
}
function Enumerator_generateWhileSome(openf, compute, closef) {
  let started = false;
  let curr = void 0;
  let state = some(openf());
  const dispose = () => {
    if (state != null) {
      const x_1 = value(state);
      try {
        closef(x_1);
      } finally {
        state = void 0;
      }
    }
  };
  const finish = () => {
    try {
      dispose();
    } finally {
      curr = void 0;
    }
  };
  return Enumerator_FromFunctions$1_$ctor_58C54629(() => {
    if (!started) {
      Enumerator_notStarted();
    }
    if (curr != null) {
      return value(curr);
    } else {
      return Enumerator_alreadyFinished();
    }
  }, () => {
    if (!started) {
      started = true;
    }
    if (state != null) {
      const s2 = value(state);
      let matchValue_1;
      try {
        matchValue_1 = compute(s2);
      } catch (matchValue) {
        finish();
        throw matchValue;
      }
      if (matchValue_1 != null) {
        curr = matchValue_1;
        return true;
      } else {
        finish();
        return false;
      }
    } else {
      return false;
    }
  }, dispose);
}
function Enumerator_unfold(f2, state) {
  let curr = void 0;
  let acc = state;
  return Enumerator_FromFunctions$1_$ctor_58C54629(() => {
    if (curr != null) {
      const x2 = curr[0];
      curr[1];
      return x2;
    } else {
      return Enumerator_notStarted();
    }
  }, () => {
    curr = f2(acc);
    if (curr != null) {
      curr[0];
      const st_1 = curr[1];
      acc = st_1;
      return true;
    } else {
      return false;
    }
  }, () => {
  });
}
function checkNonNull(argName, arg) {
  if (arg == null) {
    Operators_NullArg(argName);
  }
}
function mkSeq(f2) {
  return Enumerator_Seq_$ctor_673A07F2(f2);
}
function ofSeq$3(xs) {
  checkNonNull("source", xs);
  return getEnumerator(xs);
}
function delay(generator) {
  return mkSeq(() => getEnumerator(generator()));
}
function concat$1(sources) {
  return mkSeq(() => Enumerator_concat(sources));
}
function unfold(generator, state) {
  return mkSeq(() => Enumerator_unfold(generator, state));
}
function singleton$1(x2) {
  return delay(() => singleton$2(x2));
}
function ofArray$1(arr) {
  return arr;
}
function toArray$2(xs) {
  if (xs instanceof FSharpList) {
    return toArray$1(xs);
  } else {
    return Array.from(xs);
  }
}
function ofList$1(xs) {
  return xs;
}
function toList(xs) {
  if (isArrayLike(xs)) {
    return ofArray(xs);
  } else if (xs instanceof FSharpList) {
    return xs;
  } else {
    return ofSeq$2(xs);
  }
}
function generate(create, compute, dispose) {
  return mkSeq(() => Enumerator_generateWhileSome(create, compute, dispose));
}
function generateIndexed(create, compute, dispose) {
  return mkSeq(() => {
    let i2 = -1;
    return Enumerator_generateWhileSome(create, (x2) => {
      i2 = i2 + 1 | 0;
      return compute(i2, x2);
    }, dispose);
  });
}
function append$1(xs, ys) {
  return concat$1([xs, ys]);
}
function compareWith(comparer, xs, ys) {
  const e1 = ofSeq$3(xs);
  try {
    const e2 = ofSeq$3(ys);
    try {
      let c2 = 0;
      let b1 = e1["System.Collections.IEnumerator.MoveNext"]();
      let b2 = e2["System.Collections.IEnumerator.MoveNext"]();
      while (c2 === 0 && b1 && b2) {
        c2 = comparer(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]()) | 0;
        if (c2 === 0) {
          b1 = e1["System.Collections.IEnumerator.MoveNext"]();
          b2 = e2["System.Collections.IEnumerator.MoveNext"]();
        }
      }
      return (c2 !== 0 ? c2 : b1 ? 1 : b2 ? -1 : 0) | 0;
    } finally {
      e2.Dispose();
    }
  } finally {
    e1.Dispose();
  }
}
function contains$1(value2, xs, comparer) {
  const e2 = ofSeq$3(xs);
  try {
    let found = false;
    while (!found && e2["System.Collections.IEnumerator.MoveNext"]()) {
      found = comparer.Equals(value2, e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
    }
    return found;
  } finally {
    e2.Dispose();
  }
}
function fold$1(folder, state, xs) {
  const e2 = ofSeq$3(xs);
  try {
    let acc = state;
    while (e2["System.Collections.IEnumerator.MoveNext"]()) {
      acc = folder(acc, e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
    }
    return acc;
  } finally {
    e2.Dispose();
  }
}
function iterate$1(action, xs) {
  fold$1((unitVar0, x2) => {
    action(x2);
  }, void 0, xs);
}
function iterateIndexed(action, xs) {
  fold$1((i2, x2) => {
    action(i2, x2);
    return i2 + 1 | 0;
  }, 0, xs);
}
function map(mapping, xs) {
  return generate(() => ofSeq$3(xs), (e2) => e2["System.Collections.IEnumerator.MoveNext"]() ? some(mapping(e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0, (e_1) => {
    e_1.Dispose();
  });
}
function map2(mapping, xs, ys) {
  return generate(() => [ofSeq$3(xs), ofSeq$3(ys)], (tupledArg) => {
    const e1 = tupledArg[0];
    const e2 = tupledArg[1];
    return e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]() ? some(mapping(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
  }, (tupledArg_1) => {
    try {
      tupledArg_1[0].Dispose();
    } finally {
      tupledArg_1[1].Dispose();
    }
  });
}
function skip(count2, source) {
  return mkSeq(() => {
    const e2 = ofSeq$3(source);
    try {
      for (let _2 = 1; _2 <= count2; _2++) {
        if (!e2["System.Collections.IEnumerator.MoveNext"]()) {
          throw new Error(SR_notEnoughElements + "\\nParameter name: source");
        }
      }
      return Enumerator_enumerateThenFinally(() => {
      }, e2);
    } catch (matchValue) {
      e2.Dispose();
      throw matchValue;
    }
  });
}
function take(count2, xs) {
  return generateIndexed(() => ofSeq$3(xs), (i2, e2) => {
    if (i2 < count2) {
      if (e2["System.Collections.IEnumerator.MoveNext"]()) {
        return some(e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
      } else {
        throw new Error(SR_notEnoughElements + "\\nParameter name: source");
      }
    } else {
      return void 0;
    }
  }, (e_1) => {
    e_1.Dispose();
  });
}
function zip(xs, ys) {
  return map2((x2, y) => [x2, y], xs, ys);
}
function collect(mapping, xs) {
  return delay(() => concat$1(map(mapping, xs)));
}
function sortWith$1(comparer, xs) {
  return delay(() => {
    const arr = toArray$2(xs);
    arr.sort(comparer);
    return ofArray$1(arr);
  });
}
function sortBy(projection, xs, comparer) {
  return sortWith$1((x2, y) => comparer.Compare(projection(x2), projection(y)), xs);
}
function sortByDescending(projection, xs, comparer) {
  return sortWith$1((x2, y) => comparer.Compare(projection(x2), projection(y)) * -1, xs);
}
class FSharpList extends Record {
  constructor(head2, tail2) {
    super();
    this.head = head2;
    this.tail = tail2;
  }
  toString() {
    const xs = this;
    return "[" + join("; ", xs) + "]";
  }
  Equals(other) {
    const xs = this;
    if (xs === other) {
      return true;
    } else {
      const loop = (xs_1_mut, ys_1_mut) => {
        loop:
          while (true) {
            const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            const matchValue = [xs_1.tail, ys_1.tail];
            if (matchValue[0] != null) {
              if (matchValue[1] != null) {
                const xt = matchValue[0];
                const yt = matchValue[1];
                if (equals(xs_1.head, ys_1.head)) {
                  xs_1_mut = xt;
                  ys_1_mut = yt;
                  continue loop;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            } else if (matchValue[1] != null) {
              return false;
            } else {
              return true;
            }
          }
      };
      return loop(xs, other);
    }
  }
  GetHashCode() {
    const xs = this;
    const loop = (i_mut, h_mut, xs_1_mut) => {
      loop:
        while (true) {
          const i2 = i_mut, h2 = h_mut, xs_1 = xs_1_mut;
          const matchValue = xs_1.tail;
          if (matchValue != null) {
            const t2 = matchValue;
            if (i2 > 18) {
              return h2 | 0;
            } else {
              i_mut = i2 + 1;
              h_mut = (h2 << 1) + structuralHash(xs_1.head) + 631 * i2;
              xs_1_mut = t2;
              continue loop;
            }
          } else {
            return h2 | 0;
          }
        }
    };
    return loop(0, 0, xs) | 0;
  }
  toJSON(_key) {
    const this$ = this;
    return Array.from(this$);
  }
  CompareTo(other) {
    const xs = this;
    const loop = (xs_1_mut, ys_1_mut) => {
      loop:
        while (true) {
          const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
          const matchValue = [xs_1.tail, ys_1.tail];
          if (matchValue[0] != null) {
            if (matchValue[1] != null) {
              const xt = matchValue[0];
              const yt = matchValue[1];
              const c2 = compare(xs_1.head, ys_1.head) | 0;
              if (c2 === 0) {
                xs_1_mut = xt;
                ys_1_mut = yt;
                continue loop;
              } else {
                return c2 | 0;
              }
            } else {
              return 1;
            }
          } else if (matchValue[1] != null) {
            return -1;
          } else {
            return 0;
          }
        }
    };
    return loop(xs, other) | 0;
  }
  GetEnumerator() {
    const xs = this;
    return ListEnumerator$1_$ctor_3002E699(xs);
  }
  [Symbol.iterator]() {
    return toIterator(this.GetEnumerator());
  }
  ["System.Collections.IEnumerable.GetEnumerator"]() {
    const xs = this;
    return getEnumerator(xs);
  }
}
class ListEnumerator$1 {
  constructor(xs) {
    this.xs = xs;
    this.it = this.xs;
    this.current = null;
  }
  ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
    const __ = this;
    return __.current;
  }
  ["System.Collections.IEnumerator.get_Current"]() {
    const __ = this;
    return __.current;
  }
  ["System.Collections.IEnumerator.MoveNext"]() {
    const __ = this;
    const matchValue = __.it.tail;
    if (matchValue != null) {
      const t2 = matchValue;
      __.current = __.it.head;
      __.it = t2;
      return true;
    } else {
      return false;
    }
  }
  ["System.Collections.IEnumerator.Reset"]() {
    const __ = this;
    __.it = __.xs;
    __.current = null;
  }
  Dispose() {
  }
}
function ListEnumerator$1_$ctor_3002E699(xs) {
  return new ListEnumerator$1(xs);
}
function FSharpList_get_Empty() {
  return new FSharpList(null, void 0);
}
function FSharpList_Cons_305B8EAC(x2, xs) {
  return new FSharpList(x2, xs);
}
function FSharpList__get_IsEmpty(xs) {
  return xs.tail == null;
}
function FSharpList__get_Length(xs) {
  const loop = (i_mut, xs_1_mut) => {
    loop:
      while (true) {
        const i2 = i_mut, xs_1 = xs_1_mut;
        const matchValue = xs_1.tail;
        if (matchValue != null) {
          i_mut = i2 + 1;
          xs_1_mut = matchValue;
          continue loop;
        } else {
          return i2 | 0;
        }
      }
  };
  return loop(0, xs) | 0;
}
function FSharpList__get_Head(xs) {
  const matchValue = xs.tail;
  if (matchValue != null) {
    return xs.head;
  } else {
    throw new Error(SR_inputWasEmpty + "\\nParameter name: list");
  }
}
function FSharpList__get_Tail(xs) {
  const matchValue = xs.tail;
  if (matchValue != null) {
    return matchValue;
  } else {
    throw new Error(SR_inputWasEmpty + "\\nParameter name: list");
  }
}
function empty$2() {
  return FSharpList_get_Empty();
}
function cons(x2, xs) {
  return FSharpList_Cons_305B8EAC(x2, xs);
}
function singleton(x2) {
  return FSharpList_Cons_305B8EAC(x2, FSharpList_get_Empty());
}
function isEmpty(xs) {
  return FSharpList__get_IsEmpty(xs);
}
function length(xs) {
  return FSharpList__get_Length(xs);
}
function head(xs) {
  return FSharpList__get_Head(xs);
}
function tail(xs) {
  return FSharpList__get_Tail(xs);
}
function toArray$1(xs) {
  const len = FSharpList__get_Length(xs) | 0;
  const res = fill(new Array(len), 0, len, null);
  const loop = (i_mut, xs_1_mut) => {
    loop:
      while (true) {
        const i2 = i_mut, xs_1 = xs_1_mut;
        if (!FSharpList__get_IsEmpty(xs_1)) {
          res[i2] = FSharpList__get_Head(xs_1);
          i_mut = i2 + 1;
          xs_1_mut = FSharpList__get_Tail(xs_1);
          continue loop;
        }
        break;
      }
  };
  loop(0, xs);
  return res;
}
function fold(folder, state, xs) {
  let acc = state;
  let xs_1 = xs;
  while (!FSharpList__get_IsEmpty(xs_1)) {
    acc = folder(acc, FSharpList__get_Head(xs_1));
    xs_1 = FSharpList__get_Tail(xs_1);
  }
  return acc;
}
function reverse(xs) {
  return fold((acc, x2) => FSharpList_Cons_305B8EAC(x2, acc), FSharpList_get_Empty(), xs);
}
function foldBack(folder, xs, state) {
  return foldBack$1(folder, toArray$1(xs), state);
}
function iterate(action, xs) {
  fold((unitVar0, x2) => {
    action(x2);
  }, void 0, xs);
}
function ofArrayWithTail(xs, tail_1) {
  let res = tail_1;
  for (let i2 = xs.length - 1; i2 >= 0; i2--) {
    res = FSharpList_Cons_305B8EAC(xs[i2], res);
  }
  return res;
}
function ofArray(xs) {
  return ofArrayWithTail(xs, FSharpList_get_Empty());
}
function ofSeq$2(xs) {
  let xs_3, t2;
  if (isArrayLike(xs)) {
    return ofArray(xs);
  } else if (xs instanceof FSharpList) {
    return xs;
  } else {
    const root = FSharpList_get_Empty();
    let node = root;
    const enumerator = getEnumerator(xs);
    try {
      while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
        const x2 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
        node = (xs_3 = node, t2 = new FSharpList(x2, void 0), xs_3.tail = t2, t2);
      }
    } finally {
      enumerator.Dispose();
    }
    const xs_5 = node;
    const t_2 = FSharpList_get_Empty();
    xs_5.tail = t_2;
    return FSharpList__get_Tail(root);
  }
}
function concat(lists) {
  const root = FSharpList_get_Empty();
  let node = root;
  const action = (xs) => {
    node = fold((acc, x2) => {
      const t2 = new FSharpList(x2, void 0);
      acc.tail = t2;
      return t2;
    }, node, xs);
  };
  if (isArrayLike(lists)) {
    lists.forEach(action);
  } else if (lists instanceof FSharpList) {
    iterate(action, lists);
  } else {
    const enumerator = getEnumerator(lists);
    try {
      while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
        action(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
      }
    } finally {
      enumerator.Dispose();
    }
  }
  const xs_6 = node;
  const t_2 = FSharpList_get_Empty();
  xs_6.tail = t_2;
  return FSharpList__get_Tail(root);
}
function append(xs, ys) {
  return fold((acc, x2) => FSharpList_Cons_305B8EAC(x2, acc), ys, reverse(xs));
}
function initialize(n2, f2) {
  let xs, t2;
  const root = FSharpList_get_Empty();
  let node = root;
  for (let i2 = 0; i2 <= n2 - 1; i2++) {
    node = (xs = node, t2 = new FSharpList(f2(i2), void 0), xs.tail = t2, t2);
  }
  const xs_2 = node;
  const t_2 = FSharpList_get_Empty();
  xs_2.tail = t_2;
  return FSharpList__get_Tail(root);
}
function sortWith(comparer, xs) {
  const arr = toArray$1(xs);
  arr.sort(comparer);
  return ofArray(arr);
}
function sortDescending(xs, comparer) {
  return sortWith((x2, y) => comparer.Compare(x2, y) * -1, xs);
}
function Log_onError(text, ex) {
  console.error(text, ex);
}
function Cmd_exec(onError, dispatch, cmd) {
  iterate((call) => {
    try {
      call(dispatch);
    } catch (ex) {
      onError(ex);
    }
  }, cmd);
}
function Cmd_none() {
  return empty$2();
}
function Cmd_batch(cmds) {
  return concat(cmds);
}
function Cmd_OfFunc_result(msg) {
  return singleton((dispatch) => {
    dispatch(msg);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$2 = Symbol(), n$3 = new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$3.get(this.cssText);
    return t$1 && e2 === void 0 && (n$3.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$3 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$2), r$2 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$2);
}, i$1 = (e2, n2) => {
  t$1 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$1 = t$1 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$3(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$1 = window.trustedTypes, r$1 = e$1 ? e$1.emptyScript : "", h$1 = window.reactiveElementPolyfillSupport, o$2 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$1 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$2 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$2 = { attribute: true, type: String, converter: o$2, reflect: false, hasChanged: n$2 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Eh(s2, i2);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$2) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S$1(i3));
    } else
      i2 !== void 0 && s2.push(S$1(i2));
    return s2;
  }
  static _$Eh(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$1(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i2, s2 = l$2) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$2.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$2.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$2)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$E_ === void 0 && (this._$E_ = new Map()), this._$E_.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3) => this[i3] = t3), this._$Et = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i2 = false, this._$EU(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$E_ !== void 0 && (this._$E_.forEach((t3, i2) => this._$ES(i2, this[i2], t3)), this._$E_ = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = { mode: "open" }, h$1 == null || h$1({ ReactiveElement: a$1 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
const i = globalThis.trustedTypes, s$1 = i ? i.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e = `lit$${(Math.random() + "").slice(9)}$`, o$1 = "?" + e, n$1 = `<${o$1}>`, l$1 = document, h = (t2 = "") => l$1.createComment(t2), r = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d = Array.isArray, u = (t2) => {
  var i2;
  return d(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, $ = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), p = $(1), b = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), x = new WeakMap(), w = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$1.createTreeWalker(l$1, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, $2 = -1, p2 = 0;
    for (; p2 < s2.length && (d2.lastIndex = p2, u3 = d2.exec(s2), u3 !== null); )
      p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$1 : $2 >= 0 ? (l2.push(o3), s2.slice(0, $2) + "$lit$" + s2.slice($2) + e + y) : s2 + e + ($2 === -2 ? (l2.push(void 0), i3) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class P {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = P.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i ? i.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$1)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function V(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = V(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class E {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$1).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = V(this, t2, i2), r(t2) ? t2 === T || t2 == null || t2 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.S(t2) : u(t2) ? this.M(t2) : this.$(t2);
  }
  A(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  S(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.A(t2));
  }
  $(t2) {
    this._$AH !== T && r(this._$AH) ? this._$AA.nextSibling.data = t2 : this.S(l$1.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = P.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new E(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.S(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = x.get(t2.strings);
    return i2 === void 0 && x.set(t2.strings, i2 = new P(t2)), i2;
  }
  M(t2) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.A(h()), this.A(h()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = V(this, t2, i2, 0), n2 = !r(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = V(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r(h2) || h2 !== this._$AH[l2]), h2 === T ? t2 = T : t2 !== T && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.k(t2);
  }
  k(t2) {
    t2 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t2) {
    this.element[this.name] = t2 === T ? void 0 : t2;
  }
}
const k = i ? i.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t2) {
    t2 && t2 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = V(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : T) === b)
      return;
    const e2 = this._$AH, o2 = t2 === T && e2 !== T || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== T && (e2 === T || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    V(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(P, N), ((t = globalThis.litHtmlVersions) !== null && t !== void 0 ? t : globalThis.litHtmlVersions = []).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = w(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l = globalThis.litElementHydrateSupport) === null || l === void 0 || l.call(globalThis, { LitElement: s });
const n = globalThis.litElementPolyfillSupport;
n == null || n({ LitElement: s });
((o = globalThis.litElementVersions) !== null && o !== void 0 ? o : globalThis.litElementVersions = []).push("3.0.2");
function transform(tag, fmt2) {
  return tag(fmt2.strs, ...fmt2.args);
}
const LitHelpers_html = (() => {
  const tag = p;
  return (fmt2) => transform(tag, fmt2);
})();
const LitHelpers_css = (() => {
  const tag = r$2;
  return (fmt2) => transform(tag, fmt2);
})();
function tryGetValue(map3, key, defaultValue) {
  if (map3.has(key)) {
    defaultValue.contents = map3.get(key);
    return true;
  }
  return false;
}
function addToDict(dict, k2, v2) {
  if (dict.has(k2)) {
    throw new Error("An item with the same key has already been added. Key: " + k2);
  }
  dict.set(k2, v2);
}
function getItemFromDict(map3, key) {
  if (map3.has(key)) {
    return map3.get(key);
  } else {
    throw new Error(`The given key '${key}' was not present in the dictionary.`);
  }
}
class Dictionary {
  constructor(pairs, comparer) {
    const this$ = new FSharpRef(null);
    this.comparer = comparer;
    this$.contents = this;
    this.hashMap = new Map([]);
    this["init@8-1"] = 1;
    const enumerator = getEnumerator(pairs);
    try {
      while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
        const pair = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
        Dictionary__Add_5BDDA1(this$.contents, pair[0], pair[1]);
      }
    } finally {
      enumerator.Dispose();
    }
  }
  get [Symbol.toStringTag]() {
    return "Dictionary";
  }
  toJSON(_key) {
    const this$ = this;
    return Array.from(this$);
  }
  ["System.Collections.IEnumerable.GetEnumerator"]() {
    const this$ = this;
    return getEnumerator(this$);
  }
  GetEnumerator() {
    const this$ = this;
    return getEnumerator(concat$1(this$.hashMap.values()));
  }
  [Symbol.iterator]() {
    return toIterator(this.GetEnumerator());
  }
  ["System.Collections.Generic.ICollection`1.Add2B595"](item) {
    const this$ = this;
    Dictionary__Add_5BDDA1(this$, item[0], item[1]);
  }
  ["System.Collections.Generic.ICollection`1.Clear"]() {
    const this$ = this;
    Dictionary__Clear(this$);
  }
  ["System.Collections.Generic.ICollection`1.Contains2B595"](item) {
    const this$ = this;
    const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
    let pattern_matching_result;
    if (matchValue != null) {
      if (equals(matchValue[1], item[1])) {
        pattern_matching_result = 0;
      } else {
        pattern_matching_result = 1;
      }
    } else {
      pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
      case 0: {
        return true;
      }
      case 1: {
        return false;
      }
    }
  }
  ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](array, arrayIndex) {
    const this$ = this;
    iterateIndexed((i2, e2) => {
      array[arrayIndex + i2] = e2;
    }, this$);
  }
  ["System.Collections.Generic.ICollection`1.get_Count"]() {
    const this$ = this;
    return Dictionary__get_Count(this$) | 0;
  }
  ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
    return false;
  }
  ["System.Collections.Generic.ICollection`1.Remove2B595"](item) {
    const this$ = this;
    const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
    if (matchValue != null) {
      if (equals(matchValue[1], item[1])) {
        Dictionary__Remove_2B595(this$, item[0]);
      }
      return true;
    } else {
      return false;
    }
  }
  ["System.Collections.Generic.IDictionary`2.Add5BDDA1"](key, value2) {
    const this$ = this;
    Dictionary__Add_5BDDA1(this$, key, value2);
  }
  ["System.Collections.Generic.IDictionary`2.ContainsKey2B595"](key) {
    const this$ = this;
    return Dictionary__ContainsKey_2B595(this$, key);
  }
  ["System.Collections.Generic.IDictionary`2.get_Item2B595"](key) {
    const this$ = this;
    return Dictionary__get_Item_2B595(this$, key);
  }
  ["System.Collections.Generic.IDictionary`2.set_Item5BDDA1"](key, v2) {
    const this$ = this;
    Dictionary__set_Item_5BDDA1(this$, key, v2);
  }
  ["System.Collections.Generic.IDictionary`2.get_Keys"]() {
    const this$ = this;
    return toArray$2(delay(() => map((pair) => pair[0], this$)));
  }
  ["System.Collections.Generic.IDictionary`2.Remove2B595"](key) {
    const this$ = this;
    return Dictionary__Remove_2B595(this$, key);
  }
  ["System.Collections.Generic.IDictionary`2.TryGetValue23A0B95A"](key, value2) {
    const this$ = this;
    const matchValue = Dictionary__TryFind_2B595(this$, key);
    if (matchValue != null) {
      const pair = matchValue;
      value2.contents = pair[1];
      return true;
    } else {
      return false;
    }
  }
  ["System.Collections.Generic.IDictionary`2.get_Values"]() {
    const this$ = this;
    return toArray$2(delay(() => map((pair) => pair[1], this$)));
  }
  get size() {
    const this$ = this;
    return Dictionary__get_Count(this$) | 0;
  }
  clear() {
    const this$ = this;
    Dictionary__Clear(this$);
  }
  delete(k2) {
    const this$ = this;
    return Dictionary__Remove_2B595(this$, k2);
  }
  entries() {
    const this$ = this;
    return map((p2) => [p2[0], p2[1]], this$);
  }
  get(k2) {
    const this$ = this;
    return Dictionary__get_Item_2B595(this$, k2);
  }
  has(k2) {
    const this$ = this;
    return Dictionary__ContainsKey_2B595(this$, k2);
  }
  keys() {
    const this$ = this;
    return map((p2) => p2[0], this$);
  }
  set(k2, v2) {
    const this$ = this;
    Dictionary__set_Item_5BDDA1(this$, k2, v2);
    return this$;
  }
  values() {
    const this$ = this;
    return map((p2) => p2[1], this$);
  }
  forEach(f2, thisArg) {
    const this$ = this;
    iterate$1((p2) => {
      f2(p2[1], p2[0], this$);
    }, this$);
  }
}
function Dictionary__TryFindIndex_2B595(this$, k2) {
  const h2 = this$.comparer.GetHashCode(k2) | 0;
  let matchValue;
  let outArg = null;
  matchValue = [tryGetValue(this$.hashMap, h2, new FSharpRef(() => outArg, (v2) => {
    outArg = v2;
  })), outArg];
  if (matchValue[0]) {
    return [true, h2, matchValue[1].findIndex((pair) => this$.comparer.Equals(k2, pair[0]))];
  } else {
    return [false, h2, -1];
  }
}
function Dictionary__TryFind_2B595(this$, k2) {
  const matchValue = Dictionary__TryFindIndex_2B595(this$, k2);
  let pattern_matching_result;
  if (matchValue[0]) {
    if (matchValue[2] > -1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
  } else {
    pattern_matching_result = 1;
  }
  switch (pattern_matching_result) {
    case 0: {
      return getItemFromDict(this$.hashMap, matchValue[1])[matchValue[2]];
    }
    case 1: {
      return void 0;
    }
  }
}
function Dictionary__Clear(this$) {
  this$.hashMap.clear();
}
function Dictionary__get_Count(this$) {
  let count2 = 0;
  let enumerator = getEnumerator(this$.hashMap.values());
  try {
    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
      const pairs = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
      count2 = count2 + pairs.length | 0;
    }
  } finally {
    enumerator.Dispose();
  }
  return count2 | 0;
}
function Dictionary__get_Item_2B595(this$, k2) {
  const matchValue = Dictionary__TryFind_2B595(this$, k2);
  if (matchValue != null) {
    return matchValue[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
function Dictionary__set_Item_5BDDA1(this$, k2, v2) {
  const matchValue = Dictionary__TryFindIndex_2B595(this$, k2);
  let pattern_matching_result;
  if (matchValue[0]) {
    if (matchValue[2] > -1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
  } else {
    pattern_matching_result = 1;
  }
  switch (pattern_matching_result) {
    case 0: {
      getItemFromDict(this$.hashMap, matchValue[1])[matchValue[2]] = [k2, v2];
      break;
    }
    case 1: {
      if (matchValue[0]) {
        void getItemFromDict(this$.hashMap, matchValue[1]).push([k2, v2]);
      } else {
        this$.hashMap.set(matchValue[1], [[k2, v2]]);
      }
      break;
    }
  }
}
function Dictionary__Add_5BDDA1(this$, k2, v2) {
  const matchValue = Dictionary__TryFindIndex_2B595(this$, k2);
  let pattern_matching_result;
  if (matchValue[0]) {
    if (matchValue[2] > -1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
  } else {
    pattern_matching_result = 1;
  }
  switch (pattern_matching_result) {
    case 0: {
      const msg = format("An item with the same key has already been added. Key: {0}", k2);
      throw new Error(msg);
    }
    case 1: {
      if (matchValue[0]) {
        void getItemFromDict(this$.hashMap, matchValue[1]).push([k2, v2]);
      } else {
        this$.hashMap.set(matchValue[1], [[k2, v2]]);
      }
      break;
    }
  }
}
function Dictionary__ContainsKey_2B595(this$, k2) {
  const matchValue = Dictionary__TryFindIndex_2B595(this$, k2);
  let pattern_matching_result;
  if (matchValue[0]) {
    if (matchValue[2] > -1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
  } else {
    pattern_matching_result = 1;
  }
  switch (pattern_matching_result) {
    case 0: {
      return true;
    }
    case 1: {
      return false;
    }
  }
}
function Dictionary__Remove_2B595(this$, k2) {
  const matchValue = Dictionary__TryFindIndex_2B595(this$, k2);
  let pattern_matching_result;
  if (matchValue[0]) {
    if (matchValue[2] > -1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
  } else {
    pattern_matching_result = 1;
  }
  switch (pattern_matching_result) {
    case 0: {
      getItemFromDict(this$.hashMap, matchValue[1]).splice(matchValue[2], 1);
      return true;
    }
    case 1: {
      return false;
    }
  }
}
function groupBy(projection, xs, comparer) {
  return delay(() => {
    const dict = new Dictionary([], comparer);
    const keys = [];
    const enumerator = getEnumerator(xs);
    try {
      while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
        const x2 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
        const key = projection(x2);
        let matchValue;
        let outArg = null;
        matchValue = [tryGetValue(dict, key, new FSharpRef(() => outArg, (v2) => {
          outArg = v2;
        })), outArg];
        if (matchValue[0]) {
          void matchValue[1].push(x2);
        } else {
          addToDict(dict, key, [x2]);
          void keys.push(key);
        }
      }
    } finally {
      enumerator.Dispose();
    }
    return map((key_1) => [key_1, getItemFromDict(dict, key_1)], keys);
  });
}
class MapTreeLeaf$2 {
  constructor(k2, v2) {
    this.k = k2;
    this.v = v2;
  }
}
function MapTreeLeaf$2_$ctor_5BDDA1(k2, v2) {
  return new MapTreeLeaf$2(k2, v2);
}
function MapTreeLeaf$2__get_Key(_2) {
  return _2.k;
}
function MapTreeLeaf$2__get_Value(_2) {
  return _2.v;
}
class MapTreeNode$2 extends MapTreeLeaf$2 {
  constructor(k2, v2, left, right, h2) {
    super(k2, v2);
    this.left = left;
    this.right = right;
    this.h = h2 | 0;
  }
}
function MapTreeNode$2_$ctor_499A11FD(k2, v2, left, right, h2) {
  return new MapTreeNode$2(k2, v2, left, right, h2);
}
function MapTreeNode$2__get_Left(_2) {
  return _2.left;
}
function MapTreeNode$2__get_Right(_2) {
  return _2.right;
}
function MapTreeNode$2__get_Height(_2) {
  return _2.h;
}
function MapTreeModule_empty() {
  return void 0;
}
function MapTreeModule_sizeAux(acc_mut, m_mut) {
  MapTreeModule_sizeAux:
    while (true) {
      const acc = acc_mut, m2 = m_mut;
      if (m2 != null) {
        const m22 = m2;
        if (m22 instanceof MapTreeNode$2) {
          acc_mut = MapTreeModule_sizeAux(acc + 1, MapTreeNode$2__get_Left(m22));
          m_mut = MapTreeNode$2__get_Right(m22);
          continue MapTreeModule_sizeAux;
        } else {
          return acc + 1 | 0;
        }
      } else {
        return acc | 0;
      }
    }
}
function MapTreeModule_size(x2) {
  return MapTreeModule_sizeAux(0, x2);
}
function MapTreeModule_mk(l2, k2, v2, r2) {
  let hl;
  const m2 = l2;
  if (m2 != null) {
    const m22 = m2;
    hl = m22 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m22) : 1;
  } else {
    hl = 0;
  }
  let hr;
  const m_1 = r2;
  if (m_1 != null) {
    const m2_1 = m_1;
    hr = m2_1 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m2_1) : 1;
  } else {
    hr = 0;
  }
  const m_2 = (hl < hr ? hr : hl) | 0;
  if (m_2 === 0) {
    return MapTreeLeaf$2_$ctor_5BDDA1(k2, v2);
  } else {
    return MapTreeNode$2_$ctor_499A11FD(k2, v2, l2, r2, m_2 + 1);
  }
}
function MapTreeModule_rebalance(t1, k2, v2, t2) {
  let m_2, m2_2, m_3, m2_3;
  let t1h;
  const m2 = t1;
  if (m2 != null) {
    const m22 = m2;
    t1h = m22 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m22) : 1;
  } else {
    t1h = 0;
  }
  let t2h;
  const m_1 = t2;
  if (m_1 != null) {
    const m2_1 = m_1;
    t2h = m2_1 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m2_1) : 1;
  } else {
    t2h = 0;
  }
  if (t2h > t1h + 2) {
    const matchValue = value(t2);
    if (matchValue instanceof MapTreeNode$2) {
      if ((m_2 = MapTreeNode$2__get_Left(matchValue), m_2 != null ? (m2_2 = m_2, m2_2 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m2_2) : 1) : 0) > t1h + 1) {
        const matchValue_1 = value(MapTreeNode$2__get_Left(matchValue));
        if (matchValue_1 instanceof MapTreeNode$2) {
          return MapTreeModule_mk(MapTreeModule_mk(t1, k2, v2, MapTreeNode$2__get_Left(matchValue_1)), MapTreeLeaf$2__get_Key(matchValue_1), MapTreeLeaf$2__get_Value(matchValue_1), MapTreeModule_mk(MapTreeNode$2__get_Right(matchValue_1), MapTreeLeaf$2__get_Key(matchValue), MapTreeLeaf$2__get_Value(matchValue), MapTreeNode$2__get_Right(matchValue)));
        } else {
          throw new Error("internal error: Map.rebalance");
        }
      } else {
        return MapTreeModule_mk(MapTreeModule_mk(t1, k2, v2, MapTreeNode$2__get_Left(matchValue)), MapTreeLeaf$2__get_Key(matchValue), MapTreeLeaf$2__get_Value(matchValue), MapTreeNode$2__get_Right(matchValue));
      }
    } else {
      throw new Error("internal error: Map.rebalance");
    }
  } else if (t1h > t2h + 2) {
    const matchValue_2 = value(t1);
    if (matchValue_2 instanceof MapTreeNode$2) {
      if ((m_3 = MapTreeNode$2__get_Right(matchValue_2), m_3 != null ? (m2_3 = m_3, m2_3 instanceof MapTreeNode$2 ? MapTreeNode$2__get_Height(m2_3) : 1) : 0) > t2h + 1) {
        const matchValue_3 = value(MapTreeNode$2__get_Right(matchValue_2));
        if (matchValue_3 instanceof MapTreeNode$2) {
          return MapTreeModule_mk(MapTreeModule_mk(MapTreeNode$2__get_Left(matchValue_2), MapTreeLeaf$2__get_Key(matchValue_2), MapTreeLeaf$2__get_Value(matchValue_2), MapTreeNode$2__get_Left(matchValue_3)), MapTreeLeaf$2__get_Key(matchValue_3), MapTreeLeaf$2__get_Value(matchValue_3), MapTreeModule_mk(MapTreeNode$2__get_Right(matchValue_3), k2, v2, t2));
        } else {
          throw new Error("internal error: Map.rebalance");
        }
      } else {
        return MapTreeModule_mk(MapTreeNode$2__get_Left(matchValue_2), MapTreeLeaf$2__get_Key(matchValue_2), MapTreeLeaf$2__get_Value(matchValue_2), MapTreeModule_mk(MapTreeNode$2__get_Right(matchValue_2), k2, v2, t2));
      }
    } else {
      throw new Error("internal error: Map.rebalance");
    }
  } else {
    return MapTreeModule_mk(t1, k2, v2, t2);
  }
}
function MapTreeModule_add(comparer, k2, v2, m2) {
  if (m2 != null) {
    const m22 = m2;
    const c2 = comparer.Compare(k2, MapTreeLeaf$2__get_Key(m22)) | 0;
    if (m22 instanceof MapTreeNode$2) {
      if (c2 < 0) {
        return MapTreeModule_rebalance(MapTreeModule_add(comparer, k2, v2, MapTreeNode$2__get_Left(m22)), MapTreeLeaf$2__get_Key(m22), MapTreeLeaf$2__get_Value(m22), MapTreeNode$2__get_Right(m22));
      } else if (c2 === 0) {
        return MapTreeNode$2_$ctor_499A11FD(k2, v2, MapTreeNode$2__get_Left(m22), MapTreeNode$2__get_Right(m22), MapTreeNode$2__get_Height(m22));
      } else {
        return MapTreeModule_rebalance(MapTreeNode$2__get_Left(m22), MapTreeLeaf$2__get_Key(m22), MapTreeLeaf$2__get_Value(m22), MapTreeModule_add(comparer, k2, v2, MapTreeNode$2__get_Right(m22)));
      }
    } else if (c2 < 0) {
      return MapTreeNode$2_$ctor_499A11FD(k2, v2, MapTreeModule_empty(), m2, 2);
    } else if (c2 === 0) {
      return MapTreeLeaf$2_$ctor_5BDDA1(k2, v2);
    } else {
      return MapTreeNode$2_$ctor_499A11FD(k2, v2, m2, MapTreeModule_empty(), 2);
    }
  } else {
    return MapTreeLeaf$2_$ctor_5BDDA1(k2, v2);
  }
}
function MapTreeModule_tryFind(comparer_mut, k_mut, m_mut) {
  MapTreeModule_tryFind:
    while (true) {
      const comparer = comparer_mut, k2 = k_mut, m2 = m_mut;
      if (m2 != null) {
        const m22 = m2;
        const c2 = comparer.Compare(k2, MapTreeLeaf$2__get_Key(m22)) | 0;
        if (c2 === 0) {
          return some(MapTreeLeaf$2__get_Value(m22));
        } else if (m22 instanceof MapTreeNode$2) {
          comparer_mut = comparer;
          k_mut = k2;
          m_mut = c2 < 0 ? MapTreeNode$2__get_Left(m22) : MapTreeNode$2__get_Right(m22);
          continue MapTreeModule_tryFind;
        } else {
          return void 0;
        }
      } else {
        return void 0;
      }
    }
}
function MapTreeModule_find(comparer, k2, m2) {
  const matchValue = MapTreeModule_tryFind(comparer, k2, m2);
  if (matchValue == null) {
    throw new Error();
  } else {
    return value(matchValue);
  }
}
function MapTreeModule_mem(comparer_mut, k_mut, m_mut) {
  MapTreeModule_mem:
    while (true) {
      const comparer = comparer_mut, k2 = k_mut, m2 = m_mut;
      if (m2 != null) {
        const m22 = m2;
        const c2 = comparer.Compare(k2, MapTreeLeaf$2__get_Key(m22)) | 0;
        if (m22 instanceof MapTreeNode$2) {
          if (c2 < 0) {
            comparer_mut = comparer;
            k_mut = k2;
            m_mut = MapTreeNode$2__get_Left(m22);
            continue MapTreeModule_mem;
          } else if (c2 === 0) {
            return true;
          } else {
            comparer_mut = comparer;
            k_mut = k2;
            m_mut = MapTreeNode$2__get_Right(m22);
            continue MapTreeModule_mem;
          }
        } else {
          return c2 === 0;
        }
      } else {
        return false;
      }
    }
}
function MapTreeModule_iterOpt(f_mut, m_mut) {
  MapTreeModule_iterOpt:
    while (true) {
      const f2 = f_mut, m2 = m_mut;
      if (m2 != null) {
        const m22 = m2;
        if (m22 instanceof MapTreeNode$2) {
          MapTreeModule_iterOpt(f2, MapTreeNode$2__get_Left(m22));
          f2(MapTreeLeaf$2__get_Key(m22), MapTreeLeaf$2__get_Value(m22));
          f_mut = f2;
          m_mut = MapTreeNode$2__get_Right(m22);
          continue MapTreeModule_iterOpt;
        } else {
          f2(MapTreeLeaf$2__get_Key(m22), MapTreeLeaf$2__get_Value(m22));
        }
      }
      break;
    }
}
function MapTreeModule_iter(f2, m2) {
  MapTreeModule_iterOpt(f2, m2);
}
function MapTreeModule_copyToArray(m2, arr, i2) {
  let j = i2;
  MapTreeModule_iter((x2, y) => {
    arr[j] = [x2, y];
    j = j + 1 | 0;
  }, m2);
}
function MapTreeModule_ofList(comparer, l2) {
  return fold((acc, tupledArg) => MapTreeModule_add(comparer, tupledArg[0], tupledArg[1], acc), MapTreeModule_empty(), l2);
}
function MapTreeModule_mkFromEnumerator(comparer_mut, acc_mut, e_mut) {
  MapTreeModule_mkFromEnumerator:
    while (true) {
      const comparer = comparer_mut, acc = acc_mut, e2 = e_mut;
      if (e2["System.Collections.IEnumerator.MoveNext"]()) {
        const patternInput = e2["System.Collections.Generic.IEnumerator`1.get_Current"]();
        comparer_mut = comparer;
        acc_mut = MapTreeModule_add(comparer, patternInput[0], patternInput[1], acc);
        e_mut = e2;
        continue MapTreeModule_mkFromEnumerator;
      } else {
        return acc;
      }
    }
}
function MapTreeModule_ofArray(comparer, arr) {
  let res = MapTreeModule_empty();
  for (let idx = 0; idx <= arr.length - 1; idx++) {
    const forLoopVar = arr[idx];
    res = MapTreeModule_add(comparer, forLoopVar[0], forLoopVar[1], res);
  }
  return res;
}
function MapTreeModule_ofSeq(comparer, c2) {
  if (isArrayLike(c2)) {
    return MapTreeModule_ofArray(comparer, c2);
  } else if (c2 instanceof FSharpList) {
    return MapTreeModule_ofList(comparer, c2);
  } else {
    const ie = getEnumerator(c2);
    try {
      return MapTreeModule_mkFromEnumerator(comparer, MapTreeModule_empty(), ie);
    } finally {
      ie.Dispose();
    }
  }
}
class MapTreeModule_MapIterator$2 extends Record {
  constructor(stack, started) {
    super();
    this.stack = stack;
    this.started = started;
  }
}
function MapTreeModule_collapseLHS(stack_mut) {
  MapTreeModule_collapseLHS:
    while (true) {
      const stack = stack_mut;
      if (!isEmpty(stack)) {
        const rest = tail(stack);
        const m2 = head(stack);
        if (m2 != null) {
          const m22 = m2;
          if (m22 instanceof MapTreeNode$2) {
            stack_mut = ofArrayWithTail([MapTreeNode$2__get_Left(m22), MapTreeLeaf$2_$ctor_5BDDA1(MapTreeLeaf$2__get_Key(m22), MapTreeLeaf$2__get_Value(m22)), MapTreeNode$2__get_Right(m22)], rest);
            continue MapTreeModule_collapseLHS;
          } else {
            return stack;
          }
        } else {
          stack_mut = rest;
          continue MapTreeModule_collapseLHS;
        }
      } else {
        return empty$2();
      }
    }
}
function MapTreeModule_mkIterator(m2) {
  return new MapTreeModule_MapIterator$2(MapTreeModule_collapseLHS(singleton(m2)), false);
}
function MapTreeModule_notStarted() {
  throw new Error("enumeration not started");
}
function MapTreeModule_alreadyFinished() {
  throw new Error("enumeration already finished");
}
function MapTreeModule_current(i2) {
  if (i2.started) {
    const matchValue = i2.stack;
    if (!isEmpty(matchValue)) {
      if (head(matchValue) != null) {
        const m2 = head(matchValue);
        if (m2 instanceof MapTreeNode$2) {
          throw new Error("Please report error: Map iterator, unexpected stack for current");
        } else {
          return [MapTreeLeaf$2__get_Key(m2), MapTreeLeaf$2__get_Value(m2)];
        }
      } else {
        throw new Error("Please report error: Map iterator, unexpected stack for current");
      }
    } else {
      return MapTreeModule_alreadyFinished();
    }
  } else {
    return MapTreeModule_notStarted();
  }
}
function MapTreeModule_moveNext(i2) {
  if (i2.started) {
    const matchValue = i2.stack;
    if (!isEmpty(matchValue)) {
      if (head(matchValue) != null) {
        const m2 = head(matchValue);
        if (m2 instanceof MapTreeNode$2) {
          throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
        } else {
          i2.stack = MapTreeModule_collapseLHS(tail(matchValue));
          return !isEmpty(i2.stack);
        }
      } else {
        throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
      }
    } else {
      return false;
    }
  } else {
    i2.started = true;
    return !isEmpty(i2.stack);
  }
}
function MapTreeModule_mkIEnumerator(m2) {
  let i2 = MapTreeModule_mkIterator(m2);
  return {
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
      return MapTreeModule_current(i2);
    },
    ["System.Collections.IEnumerator.get_Current"]() {
      return MapTreeModule_current(i2);
    },
    ["System.Collections.IEnumerator.MoveNext"]() {
      return MapTreeModule_moveNext(i2);
    },
    ["System.Collections.IEnumerator.Reset"]() {
      i2 = MapTreeModule_mkIterator(m2);
    },
    Dispose() {
    }
  };
}
class FSharpMap {
  constructor(comparer, tree) {
    this.comparer = comparer;
    this.tree = tree;
  }
  GetHashCode() {
    const this$ = this;
    return FSharpMap__ComputeHashCode(this$) | 0;
  }
  Equals(that) {
    const this$ = this;
    if (that instanceof FSharpMap) {
      const e1 = getEnumerator(this$);
      try {
        const e2 = getEnumerator(that);
        try {
          const loop = () => {
            const m1 = e1["System.Collections.IEnumerator.MoveNext"]();
            if (m1 === e2["System.Collections.IEnumerator.MoveNext"]()) {
              if (!m1) {
                return true;
              } else {
                const e1c = e1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                const e2c = e2["System.Collections.Generic.IEnumerator`1.get_Current"]();
                if (equals(e1c[0], e2c[0]) && equals(e1c[1], e2c[1])) {
                  return loop();
                } else {
                  return false;
                }
              }
            } else {
              return false;
            }
          };
          return loop();
        } finally {
          e2.Dispose();
        }
      } finally {
        e1.Dispose();
      }
    } else {
      return false;
    }
  }
  toString() {
    const this$ = this;
    return "map [" + join("; ", map((kv) => format("({0}, {1})", kv[0], kv[1]), this$)) + "]";
  }
  get [Symbol.toStringTag]() {
    return "FSharpMap";
  }
  toJSON(_key) {
    const this$ = this;
    return Array.from(this$);
  }
  GetEnumerator() {
    const __ = this;
    return MapTreeModule_mkIEnumerator(__.tree);
  }
  [Symbol.iterator]() {
    return toIterator(this.GetEnumerator());
  }
  ["System.Collections.IEnumerable.GetEnumerator"]() {
    const __ = this;
    return MapTreeModule_mkIEnumerator(__.tree);
  }
  CompareTo(obj) {
    const m2 = this;
    if (obj instanceof FSharpMap) {
      return compareWith((kvp1, kvp2) => {
        const c2 = m2.comparer.Compare(kvp1[0], kvp2[0]) | 0;
        return (c2 !== 0 ? c2 : compare(kvp1[1], kvp2[1])) | 0;
      }, m2, obj) | 0;
    } else {
      throw new Error("not comparable\\nParameter name: obj");
    }
  }
  ["System.Collections.Generic.ICollection`1.Add2B595"](x2) {
    throw new Error("Map cannot be mutated");
  }
  ["System.Collections.Generic.ICollection`1.Clear"]() {
    throw new Error("Map cannot be mutated");
  }
  ["System.Collections.Generic.ICollection`1.Remove2B595"](x2) {
    throw new Error("Map cannot be mutated");
  }
  ["System.Collections.Generic.ICollection`1.Contains2B595"](x2) {
    const m2 = this;
    return FSharpMap__ContainsKey(m2, x2[0]) && equals(FSharpMap__get_Item(m2, x2[0]), x2[1]);
  }
  ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](arr, i2) {
    const m2 = this;
    MapTreeModule_copyToArray(m2.tree, arr, i2);
  }
  ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
    return true;
  }
  ["System.Collections.Generic.ICollection`1.get_Count"]() {
    const m2 = this;
    return FSharpMap__get_Count(m2) | 0;
  }
  ["System.Collections.Generic.IReadOnlyCollection`1.get_Count"]() {
    const m2 = this;
    return FSharpMap__get_Count(m2) | 0;
  }
  get size() {
    const m2 = this;
    return FSharpMap__get_Count(m2) | 0;
  }
  clear() {
    throw new Error("Map cannot be mutated");
  }
  delete(_arg1) {
    throw new Error("Map cannot be mutated");
  }
  entries() {
    const m2 = this;
    return map((p2) => [p2[0], p2[1]], m2);
  }
  get(k2) {
    const m2 = this;
    return FSharpMap__get_Item(m2, k2);
  }
  has(k2) {
    const m2 = this;
    return FSharpMap__ContainsKey(m2, k2);
  }
  keys() {
    const m2 = this;
    return map((p2) => p2[0], m2);
  }
  set(k2, v2) {
    throw new Error("Map cannot be mutated");
  }
  values() {
    const m2 = this;
    return map((p2) => p2[1], m2);
  }
  forEach(f2, thisArg) {
    const m2 = this;
    iterate$1((p2) => {
      f2(p2[1], p2[0], m2);
    }, m2);
  }
}
function FSharpMap_$ctor(comparer, tree) {
  return new FSharpMap(comparer, tree);
}
(() => {
  FSharpMap.empty = FSharpMap_$ctor(LanguagePrimitives_FastGenericComparer(), MapTreeModule_empty());
})();
function FSharpMap_get_Empty() {
  return FSharpMap.empty;
}
function FSharpMap_Create(ie) {
  const comparer = LanguagePrimitives_FastGenericComparer();
  return FSharpMap_$ctor(comparer, MapTreeModule_ofSeq(comparer, ie));
}
function FSharpMap__Add(m2, key, value2) {
  return FSharpMap_$ctor(m2.comparer, MapTreeModule_add(m2.comparer, key, value2, m2.tree));
}
function FSharpMap__get_Item(m2, key) {
  return MapTreeModule_find(m2.comparer, key, m2.tree);
}
function FSharpMap__get_Count(m2) {
  return MapTreeModule_size(m2.tree);
}
function FSharpMap__ContainsKey(m2, key) {
  return MapTreeModule_mem(m2.comparer, key, m2.tree);
}
function FSharpMap__TryFind(m2, key) {
  return MapTreeModule_tryFind(m2.comparer, key, m2.tree);
}
function FSharpMap__ComputeHashCode(this$) {
  const combineHash = (x2, y) => (x2 << 1) + y + 631;
  let res = 0;
  const enumerator = getEnumerator(this$);
  try {
    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
      const activePatternResult5790 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
      res = combineHash(res, structuralHash(activePatternResult5790[0])) | 0;
      res = combineHash(res, structuralHash(activePatternResult5790[1])) | 0;
    }
  } finally {
    enumerator.Dispose();
  }
  return res | 0;
}
function add$1(key, value2, table) {
  return FSharpMap__Add(table, key, value2);
}
function toSeq(table) {
  return map((kvp) => [kvp[0], kvp[1]], table);
}
function ofSeq$1(elements) {
  return FSharpMap_Create(elements);
}
function empty$1() {
  return FSharpMap_get_Empty();
}
class SetTreeLeaf$1 {
  constructor(k2) {
    this.k = k2;
  }
}
function SetTreeLeaf$1_$ctor_2B595(k2) {
  return new SetTreeLeaf$1(k2);
}
function SetTreeLeaf$1__get_Key(_2) {
  return _2.k;
}
class SetTreeNode$1 extends SetTreeLeaf$1 {
  constructor(v2, left, right, h2) {
    super(v2);
    this.left = left;
    this.right = right;
    this.h = h2 | 0;
  }
}
function SetTreeNode$1_$ctor_Z6E7BE5F7(v2, left, right, h2) {
  return new SetTreeNode$1(v2, left, right, h2);
}
function SetTreeNode$1__get_Left(_2) {
  return _2.left;
}
function SetTreeNode$1__get_Right(_2) {
  return _2.right;
}
function SetTreeNode$1__get_Height(_2) {
  return _2.h;
}
function SetTreeModule_empty() {
  return void 0;
}
function SetTreeModule_countAux(t_mut, acc_mut) {
  SetTreeModule_countAux:
    while (true) {
      const t2 = t_mut, acc = acc_mut;
      if (t2 != null) {
        const t22 = t2;
        if (t22 instanceof SetTreeNode$1) {
          t_mut = SetTreeNode$1__get_Left(t22);
          acc_mut = SetTreeModule_countAux(SetTreeNode$1__get_Right(t22), acc + 1);
          continue SetTreeModule_countAux;
        } else {
          return acc + 1 | 0;
        }
      } else {
        return acc | 0;
      }
    }
}
function SetTreeModule_count(s2) {
  return SetTreeModule_countAux(s2, 0);
}
function SetTreeModule_mk(l2, k2, r2) {
  let hl;
  const t2 = l2;
  if (t2 != null) {
    const t22 = t2;
    hl = t22 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t22) : 1;
  } else {
    hl = 0;
  }
  let hr;
  const t_1 = r2;
  if (t_1 != null) {
    const t2_1 = t_1;
    hr = t2_1 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t2_1) : 1;
  } else {
    hr = 0;
  }
  const m2 = (hl < hr ? hr : hl) | 0;
  if (m2 === 0) {
    return SetTreeLeaf$1_$ctor_2B595(k2);
  } else {
    return SetTreeNode$1_$ctor_Z6E7BE5F7(k2, l2, r2, m2 + 1);
  }
}
function SetTreeModule_rebalance(t1, v2, t2) {
  let t_2, t2_3, t_3, t2_4;
  let t1h;
  const t3 = t1;
  if (t3 != null) {
    const t2_1 = t3;
    t1h = t2_1 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t2_1) : 1;
  } else {
    t1h = 0;
  }
  let t2h;
  const t_1 = t2;
  if (t_1 != null) {
    const t2_2 = t_1;
    t2h = t2_2 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t2_2) : 1;
  } else {
    t2h = 0;
  }
  if (t2h > t1h + 2) {
    const matchValue = value(t2);
    if (matchValue instanceof SetTreeNode$1) {
      if ((t_2 = SetTreeNode$1__get_Left(matchValue), t_2 != null ? (t2_3 = t_2, t2_3 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t2_3) : 1) : 0) > t1h + 1) {
        const matchValue_1 = value(SetTreeNode$1__get_Left(matchValue));
        if (matchValue_1 instanceof SetTreeNode$1) {
          return SetTreeModule_mk(SetTreeModule_mk(t1, v2, SetTreeNode$1__get_Left(matchValue_1)), SetTreeLeaf$1__get_Key(matchValue_1), SetTreeModule_mk(SetTreeNode$1__get_Right(matchValue_1), SetTreeLeaf$1__get_Key(matchValue), SetTreeNode$1__get_Right(matchValue)));
        } else {
          throw new Error("internal error: Set.rebalance");
        }
      } else {
        return SetTreeModule_mk(SetTreeModule_mk(t1, v2, SetTreeNode$1__get_Left(matchValue)), SetTreeLeaf$1__get_Key(matchValue), SetTreeNode$1__get_Right(matchValue));
      }
    } else {
      throw new Error("internal error: Set.rebalance");
    }
  } else if (t1h > t2h + 2) {
    const matchValue_2 = value(t1);
    if (matchValue_2 instanceof SetTreeNode$1) {
      if ((t_3 = SetTreeNode$1__get_Right(matchValue_2), t_3 != null ? (t2_4 = t_3, t2_4 instanceof SetTreeNode$1 ? SetTreeNode$1__get_Height(t2_4) : 1) : 0) > t2h + 1) {
        const matchValue_3 = value(SetTreeNode$1__get_Right(matchValue_2));
        if (matchValue_3 instanceof SetTreeNode$1) {
          return SetTreeModule_mk(SetTreeModule_mk(SetTreeNode$1__get_Left(matchValue_2), SetTreeLeaf$1__get_Key(matchValue_2), SetTreeNode$1__get_Left(matchValue_3)), SetTreeLeaf$1__get_Key(matchValue_3), SetTreeModule_mk(SetTreeNode$1__get_Right(matchValue_3), v2, t2));
        } else {
          throw new Error("internal error: Set.rebalance");
        }
      } else {
        return SetTreeModule_mk(SetTreeNode$1__get_Left(matchValue_2), SetTreeLeaf$1__get_Key(matchValue_2), SetTreeModule_mk(SetTreeNode$1__get_Right(matchValue_2), v2, t2));
      }
    } else {
      throw new Error("internal error: Set.rebalance");
    }
  } else {
    return SetTreeModule_mk(t1, v2, t2);
  }
}
function SetTreeModule_add(comparer, k2, t2) {
  if (t2 != null) {
    const t22 = t2;
    const c2 = comparer.Compare(k2, SetTreeLeaf$1__get_Key(t22)) | 0;
    if (t22 instanceof SetTreeNode$1) {
      if (c2 < 0) {
        return SetTreeModule_rebalance(SetTreeModule_add(comparer, k2, SetTreeNode$1__get_Left(t22)), SetTreeLeaf$1__get_Key(t22), SetTreeNode$1__get_Right(t22));
      } else if (c2 === 0) {
        return t2;
      } else {
        return SetTreeModule_rebalance(SetTreeNode$1__get_Left(t22), SetTreeLeaf$1__get_Key(t22), SetTreeModule_add(comparer, k2, SetTreeNode$1__get_Right(t22)));
      }
    } else {
      const c_1 = comparer.Compare(k2, SetTreeLeaf$1__get_Key(t22)) | 0;
      if (c_1 < 0) {
        return SetTreeNode$1_$ctor_Z6E7BE5F7(k2, SetTreeModule_empty(), t2, 2);
      } else if (c_1 === 0) {
        return t2;
      } else {
        return SetTreeNode$1_$ctor_Z6E7BE5F7(k2, t2, SetTreeModule_empty(), 2);
      }
    }
  } else {
    return SetTreeLeaf$1_$ctor_2B595(k2);
  }
}
function SetTreeModule_mem(comparer_mut, k_mut, t_mut) {
  SetTreeModule_mem:
    while (true) {
      const comparer = comparer_mut, k2 = k_mut, t2 = t_mut;
      if (t2 != null) {
        const t22 = t2;
        const c2 = comparer.Compare(k2, SetTreeLeaf$1__get_Key(t22)) | 0;
        if (t22 instanceof SetTreeNode$1) {
          if (c2 < 0) {
            comparer_mut = comparer;
            k_mut = k2;
            t_mut = SetTreeNode$1__get_Left(t22);
            continue SetTreeModule_mem;
          } else if (c2 === 0) {
            return true;
          } else {
            comparer_mut = comparer;
            k_mut = k2;
            t_mut = SetTreeNode$1__get_Right(t22);
            continue SetTreeModule_mem;
          }
        } else {
          return c2 === 0;
        }
      } else {
        return false;
      }
    }
}
function SetTreeModule_iter(f_mut, t_mut) {
  SetTreeModule_iter:
    while (true) {
      const f2 = f_mut, t2 = t_mut;
      if (t2 != null) {
        const t22 = t2;
        if (t22 instanceof SetTreeNode$1) {
          SetTreeModule_iter(f2, SetTreeNode$1__get_Left(t22));
          f2(SetTreeLeaf$1__get_Key(t22));
          f_mut = f2;
          t_mut = SetTreeNode$1__get_Right(t22);
          continue SetTreeModule_iter;
        } else {
          f2(SetTreeLeaf$1__get_Key(t22));
        }
      }
      break;
    }
}
class SetTreeModule_SetIterator$1 extends Record {
  constructor(stack, started) {
    super();
    this.stack = stack;
    this.started = started;
  }
}
function SetTreeModule_collapseLHS(stack_mut) {
  SetTreeModule_collapseLHS:
    while (true) {
      const stack = stack_mut;
      if (!isEmpty(stack)) {
        const x2 = head(stack);
        const rest = tail(stack);
        if (x2 != null) {
          const x22 = x2;
          if (x22 instanceof SetTreeNode$1) {
            stack_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x22), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x22)), SetTreeNode$1__get_Right(x22)], rest);
            continue SetTreeModule_collapseLHS;
          } else {
            return stack;
          }
        } else {
          stack_mut = rest;
          continue SetTreeModule_collapseLHS;
        }
      } else {
        return empty$2();
      }
    }
}
function SetTreeModule_mkIterator(s2) {
  return new SetTreeModule_SetIterator$1(SetTreeModule_collapseLHS(singleton(s2)), false);
}
function SetTreeModule_notStarted() {
  throw new Error("Enumeration not started");
}
function SetTreeModule_alreadyFinished() {
  throw new Error("Enumeration already started");
}
function SetTreeModule_current(i2) {
  if (i2.started) {
    const matchValue = i2.stack;
    if (isEmpty(matchValue)) {
      return SetTreeModule_alreadyFinished();
    } else if (head(matchValue) != null) {
      const t2 = head(matchValue);
      return SetTreeLeaf$1__get_Key(t2);
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
  } else {
    return SetTreeModule_notStarted();
  }
}
function SetTreeModule_moveNext(i2) {
  if (i2.started) {
    const matchValue = i2.stack;
    if (!isEmpty(matchValue)) {
      if (head(matchValue) != null) {
        const t2 = head(matchValue);
        if (t2 instanceof SetTreeNode$1) {
          throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
        } else {
          i2.stack = SetTreeModule_collapseLHS(tail(matchValue));
          return !isEmpty(i2.stack);
        }
      } else {
        throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
      }
    } else {
      return false;
    }
  } else {
    i2.started = true;
    return !isEmpty(i2.stack);
  }
}
function SetTreeModule_mkIEnumerator(s2) {
  let i2 = SetTreeModule_mkIterator(s2);
  return {
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
      return SetTreeModule_current(i2);
    },
    ["System.Collections.IEnumerator.get_Current"]() {
      return SetTreeModule_current(i2);
    },
    ["System.Collections.IEnumerator.MoveNext"]() {
      return SetTreeModule_moveNext(i2);
    },
    ["System.Collections.IEnumerator.Reset"]() {
      i2 = SetTreeModule_mkIterator(s2);
    },
    Dispose() {
    }
  };
}
function SetTreeModule_compareStacks(comparer_mut, l1_mut, l2_mut) {
  SetTreeModule_compareStacks:
    while (true) {
      const comparer = comparer_mut, l1 = l1_mut, l2 = l2_mut;
      const matchValue = [l1, l2];
      if (!isEmpty(matchValue[0])) {
        if (!isEmpty(matchValue[1])) {
          if (head(matchValue[1]) != null) {
            if (head(matchValue[0]) != null) {
              const x1_3 = head(matchValue[0]);
              const x2_3 = head(matchValue[1]);
              if (x1_3 instanceof SetTreeNode$1) {
                if (SetTreeNode$1__get_Left(x1_3) == null) {
                  if (x2_3 instanceof SetTreeNode$1) {
                    if (SetTreeNode$1__get_Left(x2_3) == null) {
                      const c2 = comparer.Compare(SetTreeLeaf$1__get_Key(x1_3), SetTreeLeaf$1__get_Key(x2_3)) | 0;
                      if (c2 !== 0) {
                        return c2 | 0;
                      } else {
                        comparer_mut = comparer;
                        l1_mut = cons(SetTreeNode$1__get_Right(x1_3), tail(matchValue[0]));
                        l2_mut = cons(SetTreeNode$1__get_Right(x2_3), tail(matchValue[1]));
                        continue SetTreeModule_compareStacks;
                      }
                    } else {
                      const matchValue_3 = [l1, l2];
                      let pattern_matching_result, t1_6, x1_4, t2_6, x2_4;
                      if (!isEmpty(matchValue_3[0])) {
                        if (head(matchValue_3[0]) != null) {
                          pattern_matching_result = 0;
                          t1_6 = tail(matchValue_3[0]);
                          x1_4 = head(matchValue_3[0]);
                        } else if (!isEmpty(matchValue_3[1])) {
                          if (head(matchValue_3[1]) != null) {
                            pattern_matching_result = 1;
                            t2_6 = tail(matchValue_3[1]);
                            x2_4 = head(matchValue_3[1]);
                          } else {
                            pattern_matching_result = 2;
                          }
                        } else {
                          pattern_matching_result = 2;
                        }
                      } else if (!isEmpty(matchValue_3[1])) {
                        if (head(matchValue_3[1]) != null) {
                          pattern_matching_result = 1;
                          t2_6 = tail(matchValue_3[1]);
                          x2_4 = head(matchValue_3[1]);
                        } else {
                          pattern_matching_result = 2;
                        }
                      } else {
                        pattern_matching_result = 2;
                      }
                      switch (pattern_matching_result) {
                        case 0: {
                          if (x1_4 instanceof SetTreeNode$1) {
                            comparer_mut = comparer;
                            l1_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x1_4), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x1_4), SetTreeModule_empty(), SetTreeNode$1__get_Right(x1_4), 0)], t1_6);
                            l2_mut = l2;
                            continue SetTreeModule_compareStacks;
                          } else {
                            comparer_mut = comparer;
                            l1_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x1_4))], t1_6);
                            l2_mut = l2;
                            continue SetTreeModule_compareStacks;
                          }
                        }
                        case 1: {
                          if (x2_4 instanceof SetTreeNode$1) {
                            comparer_mut = comparer;
                            l1_mut = l1;
                            l2_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x2_4), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x2_4), SetTreeModule_empty(), SetTreeNode$1__get_Right(x2_4), 0)], t2_6);
                            continue SetTreeModule_compareStacks;
                          } else {
                            comparer_mut = comparer;
                            l1_mut = l1;
                            l2_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x2_4))], t2_6);
                            continue SetTreeModule_compareStacks;
                          }
                        }
                        case 2: {
                          throw new Error("unexpected state in SetTree.compareStacks");
                        }
                      }
                    }
                  } else {
                    const c_1 = comparer.Compare(SetTreeLeaf$1__get_Key(x1_3), SetTreeLeaf$1__get_Key(x2_3)) | 0;
                    if (c_1 !== 0) {
                      return c_1 | 0;
                    } else {
                      comparer_mut = comparer;
                      l1_mut = cons(SetTreeNode$1__get_Right(x1_3), tail(matchValue[0]));
                      l2_mut = cons(SetTreeModule_empty(), tail(matchValue[1]));
                      continue SetTreeModule_compareStacks;
                    }
                  }
                } else {
                  const matchValue_4 = [l1, l2];
                  let pattern_matching_result_1, t1_7, x1_5, t2_7, x2_5;
                  if (!isEmpty(matchValue_4[0])) {
                    if (head(matchValue_4[0]) != null) {
                      pattern_matching_result_1 = 0;
                      t1_7 = tail(matchValue_4[0]);
                      x1_5 = head(matchValue_4[0]);
                    } else if (!isEmpty(matchValue_4[1])) {
                      if (head(matchValue_4[1]) != null) {
                        pattern_matching_result_1 = 1;
                        t2_7 = tail(matchValue_4[1]);
                        x2_5 = head(matchValue_4[1]);
                      } else {
                        pattern_matching_result_1 = 2;
                      }
                    } else {
                      pattern_matching_result_1 = 2;
                    }
                  } else if (!isEmpty(matchValue_4[1])) {
                    if (head(matchValue_4[1]) != null) {
                      pattern_matching_result_1 = 1;
                      t2_7 = tail(matchValue_4[1]);
                      x2_5 = head(matchValue_4[1]);
                    } else {
                      pattern_matching_result_1 = 2;
                    }
                  } else {
                    pattern_matching_result_1 = 2;
                  }
                  switch (pattern_matching_result_1) {
                    case 0: {
                      if (x1_5 instanceof SetTreeNode$1) {
                        comparer_mut = comparer;
                        l1_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x1_5), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x1_5), SetTreeModule_empty(), SetTreeNode$1__get_Right(x1_5), 0)], t1_7);
                        l2_mut = l2;
                        continue SetTreeModule_compareStacks;
                      } else {
                        comparer_mut = comparer;
                        l1_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x1_5))], t1_7);
                        l2_mut = l2;
                        continue SetTreeModule_compareStacks;
                      }
                    }
                    case 1: {
                      if (x2_5 instanceof SetTreeNode$1) {
                        comparer_mut = comparer;
                        l1_mut = l1;
                        l2_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x2_5), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x2_5), SetTreeModule_empty(), SetTreeNode$1__get_Right(x2_5), 0)], t2_7);
                        continue SetTreeModule_compareStacks;
                      } else {
                        comparer_mut = comparer;
                        l1_mut = l1;
                        l2_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x2_5))], t2_7);
                        continue SetTreeModule_compareStacks;
                      }
                    }
                    case 2: {
                      throw new Error("unexpected state in SetTree.compareStacks");
                    }
                  }
                }
              } else if (x2_3 instanceof SetTreeNode$1) {
                if (SetTreeNode$1__get_Left(x2_3) == null) {
                  const c_2 = comparer.Compare(SetTreeLeaf$1__get_Key(x1_3), SetTreeLeaf$1__get_Key(x2_3)) | 0;
                  if (c_2 !== 0) {
                    return c_2 | 0;
                  } else {
                    comparer_mut = comparer;
                    l1_mut = cons(SetTreeModule_empty(), tail(matchValue[0]));
                    l2_mut = cons(SetTreeNode$1__get_Right(x2_3), tail(matchValue[1]));
                    continue SetTreeModule_compareStacks;
                  }
                } else {
                  const matchValue_5 = [l1, l2];
                  let pattern_matching_result_2, t1_8, x1_6, t2_8, x2_6;
                  if (!isEmpty(matchValue_5[0])) {
                    if (head(matchValue_5[0]) != null) {
                      pattern_matching_result_2 = 0;
                      t1_8 = tail(matchValue_5[0]);
                      x1_6 = head(matchValue_5[0]);
                    } else if (!isEmpty(matchValue_5[1])) {
                      if (head(matchValue_5[1]) != null) {
                        pattern_matching_result_2 = 1;
                        t2_8 = tail(matchValue_5[1]);
                        x2_6 = head(matchValue_5[1]);
                      } else {
                        pattern_matching_result_2 = 2;
                      }
                    } else {
                      pattern_matching_result_2 = 2;
                    }
                  } else if (!isEmpty(matchValue_5[1])) {
                    if (head(matchValue_5[1]) != null) {
                      pattern_matching_result_2 = 1;
                      t2_8 = tail(matchValue_5[1]);
                      x2_6 = head(matchValue_5[1]);
                    } else {
                      pattern_matching_result_2 = 2;
                    }
                  } else {
                    pattern_matching_result_2 = 2;
                  }
                  switch (pattern_matching_result_2) {
                    case 0: {
                      if (x1_6 instanceof SetTreeNode$1) {
                        comparer_mut = comparer;
                        l1_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x1_6), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x1_6), SetTreeModule_empty(), SetTreeNode$1__get_Right(x1_6), 0)], t1_8);
                        l2_mut = l2;
                        continue SetTreeModule_compareStacks;
                      } else {
                        comparer_mut = comparer;
                        l1_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x1_6))], t1_8);
                        l2_mut = l2;
                        continue SetTreeModule_compareStacks;
                      }
                    }
                    case 1: {
                      if (x2_6 instanceof SetTreeNode$1) {
                        comparer_mut = comparer;
                        l1_mut = l1;
                        l2_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x2_6), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x2_6), SetTreeModule_empty(), SetTreeNode$1__get_Right(x2_6), 0)], t2_8);
                        continue SetTreeModule_compareStacks;
                      } else {
                        comparer_mut = comparer;
                        l1_mut = l1;
                        l2_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x2_6))], t2_8);
                        continue SetTreeModule_compareStacks;
                      }
                    }
                    case 2: {
                      throw new Error("unexpected state in SetTree.compareStacks");
                    }
                  }
                }
              } else {
                const c_3 = comparer.Compare(SetTreeLeaf$1__get_Key(x1_3), SetTreeLeaf$1__get_Key(x2_3)) | 0;
                if (c_3 !== 0) {
                  return c_3 | 0;
                } else {
                  comparer_mut = comparer;
                  l1_mut = tail(matchValue[0]);
                  l2_mut = tail(matchValue[1]);
                  continue SetTreeModule_compareStacks;
                }
              }
            } else {
              head(matchValue[1]);
              const matchValue_1 = [l1, l2];
              let pattern_matching_result_3, t1_2, x1, t2_2, x2_1;
              if (!isEmpty(matchValue_1[0])) {
                if (head(matchValue_1[0]) != null) {
                  pattern_matching_result_3 = 0;
                  t1_2 = tail(matchValue_1[0]);
                  x1 = head(matchValue_1[0]);
                } else if (!isEmpty(matchValue_1[1])) {
                  if (head(matchValue_1[1]) != null) {
                    pattern_matching_result_3 = 1;
                    t2_2 = tail(matchValue_1[1]);
                    x2_1 = head(matchValue_1[1]);
                  } else {
                    pattern_matching_result_3 = 2;
                  }
                } else {
                  pattern_matching_result_3 = 2;
                }
              } else if (!isEmpty(matchValue_1[1])) {
                if (head(matchValue_1[1]) != null) {
                  pattern_matching_result_3 = 1;
                  t2_2 = tail(matchValue_1[1]);
                  x2_1 = head(matchValue_1[1]);
                } else {
                  pattern_matching_result_3 = 2;
                }
              } else {
                pattern_matching_result_3 = 2;
              }
              switch (pattern_matching_result_3) {
                case 0: {
                  if (x1 instanceof SetTreeNode$1) {
                    comparer_mut = comparer;
                    l1_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x1), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x1), SetTreeModule_empty(), SetTreeNode$1__get_Right(x1), 0)], t1_2);
                    l2_mut = l2;
                    continue SetTreeModule_compareStacks;
                  } else {
                    comparer_mut = comparer;
                    l1_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x1))], t1_2);
                    l2_mut = l2;
                    continue SetTreeModule_compareStacks;
                  }
                }
                case 1: {
                  if (x2_1 instanceof SetTreeNode$1) {
                    comparer_mut = comparer;
                    l1_mut = l1;
                    l2_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x2_1), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x2_1), SetTreeModule_empty(), SetTreeNode$1__get_Right(x2_1), 0)], t2_2);
                    continue SetTreeModule_compareStacks;
                  } else {
                    comparer_mut = comparer;
                    l1_mut = l1;
                    l2_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x2_1))], t2_2);
                    continue SetTreeModule_compareStacks;
                  }
                }
                case 2: {
                  throw new Error("unexpected state in SetTree.compareStacks");
                }
              }
            }
          } else if (head(matchValue[0]) != null) {
            head(matchValue[0]);
            const matchValue_2 = [l1, l2];
            let pattern_matching_result_4, t1_4, x1_2, t2_4, x2_2;
            if (!isEmpty(matchValue_2[0])) {
              if (head(matchValue_2[0]) != null) {
                pattern_matching_result_4 = 0;
                t1_4 = tail(matchValue_2[0]);
                x1_2 = head(matchValue_2[0]);
              } else if (!isEmpty(matchValue_2[1])) {
                if (head(matchValue_2[1]) != null) {
                  pattern_matching_result_4 = 1;
                  t2_4 = tail(matchValue_2[1]);
                  x2_2 = head(matchValue_2[1]);
                } else {
                  pattern_matching_result_4 = 2;
                }
              } else {
                pattern_matching_result_4 = 2;
              }
            } else if (!isEmpty(matchValue_2[1])) {
              if (head(matchValue_2[1]) != null) {
                pattern_matching_result_4 = 1;
                t2_4 = tail(matchValue_2[1]);
                x2_2 = head(matchValue_2[1]);
              } else {
                pattern_matching_result_4 = 2;
              }
            } else {
              pattern_matching_result_4 = 2;
            }
            switch (pattern_matching_result_4) {
              case 0: {
                if (x1_2 instanceof SetTreeNode$1) {
                  comparer_mut = comparer;
                  l1_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x1_2), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x1_2), SetTreeModule_empty(), SetTreeNode$1__get_Right(x1_2), 0)], t1_4);
                  l2_mut = l2;
                  continue SetTreeModule_compareStacks;
                } else {
                  comparer_mut = comparer;
                  l1_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x1_2))], t1_4);
                  l2_mut = l2;
                  continue SetTreeModule_compareStacks;
                }
              }
              case 1: {
                if (x2_2 instanceof SetTreeNode$1) {
                  comparer_mut = comparer;
                  l1_mut = l1;
                  l2_mut = ofArrayWithTail([SetTreeNode$1__get_Left(x2_2), SetTreeNode$1_$ctor_Z6E7BE5F7(SetTreeLeaf$1__get_Key(x2_2), SetTreeModule_empty(), SetTreeNode$1__get_Right(x2_2), 0)], t2_4);
                  continue SetTreeModule_compareStacks;
                } else {
                  comparer_mut = comparer;
                  l1_mut = l1;
                  l2_mut = ofArrayWithTail([SetTreeModule_empty(), SetTreeLeaf$1_$ctor_2B595(SetTreeLeaf$1__get_Key(x2_2))], t2_4);
                  continue SetTreeModule_compareStacks;
                }
              }
              case 2: {
                throw new Error("unexpected state in SetTree.compareStacks");
              }
            }
          } else {
            comparer_mut = comparer;
            l1_mut = tail(matchValue[0]);
            l2_mut = tail(matchValue[1]);
            continue SetTreeModule_compareStacks;
          }
        } else {
          return 1;
        }
      } else if (isEmpty(matchValue[1])) {
        return 0;
      } else {
        return -1;
      }
      break;
    }
}
function SetTreeModule_compare(comparer, t1, t2) {
  if (t1 == null) {
    if (t2 == null) {
      return 0;
    } else {
      return -1;
    }
  } else if (t2 == null) {
    return 1;
  } else {
    return SetTreeModule_compareStacks(comparer, singleton(t1), singleton(t2)) | 0;
  }
}
function SetTreeModule_copyToArray(s2, arr, i2) {
  let j = i2;
  SetTreeModule_iter((x2) => {
    arr[j] = x2;
    j = j + 1 | 0;
  }, s2);
}
function SetTreeModule_toArray(s2) {
  const n2 = SetTreeModule_count(s2) | 0;
  const res = fill(new Array(n2), 0, n2, null);
  SetTreeModule_copyToArray(s2, res, 0);
  return res;
}
function SetTreeModule_mkFromEnumerator(comparer_mut, acc_mut, e_mut) {
  SetTreeModule_mkFromEnumerator:
    while (true) {
      const comparer = comparer_mut, acc = acc_mut, e2 = e_mut;
      if (e2["System.Collections.IEnumerator.MoveNext"]()) {
        comparer_mut = comparer;
        acc_mut = SetTreeModule_add(comparer, e2["System.Collections.Generic.IEnumerator`1.get_Current"](), acc);
        e_mut = e2;
        continue SetTreeModule_mkFromEnumerator;
      } else {
        return acc;
      }
    }
}
function SetTreeModule_ofArray(comparer, l2) {
  return fold$2((acc, k2) => SetTreeModule_add(comparer, k2, acc), SetTreeModule_empty(), l2);
}
function SetTreeModule_ofList(comparer, l2) {
  return fold((acc, k2) => SetTreeModule_add(comparer, k2, acc), SetTreeModule_empty(), l2);
}
function SetTreeModule_ofSeq(comparer, c2) {
  if (isArrayLike(c2)) {
    return SetTreeModule_ofArray(comparer, c2);
  } else if (c2 instanceof FSharpList) {
    return SetTreeModule_ofList(comparer, c2);
  } else {
    const ie = getEnumerator(c2);
    try {
      return SetTreeModule_mkFromEnumerator(comparer, SetTreeModule_empty(), ie);
    } finally {
      ie.Dispose();
    }
  }
}
class FSharpSet {
  constructor(comparer, tree) {
    this.comparer = comparer;
    this.tree = tree;
  }
  GetHashCode() {
    const this$ = this;
    return FSharpSet__ComputeHashCode(this$) | 0;
  }
  Equals(that) {
    const this$ = this;
    return that instanceof FSharpSet && SetTreeModule_compare(FSharpSet__get_Comparer(this$), FSharpSet__get_Tree(this$), FSharpSet__get_Tree(that)) === 0;
  }
  toString() {
    const this$ = this;
    return "set [" + join("; ", map((x2) => {
      let copyOfStruct = x2;
      return toString(copyOfStruct);
    }, this$)) + "]";
  }
  get [Symbol.toStringTag]() {
    return "FSharpSet";
  }
  toJSON(_key) {
    const this$ = this;
    return Array.from(this$);
  }
  CompareTo(that) {
    const s2 = this;
    return SetTreeModule_compare(FSharpSet__get_Comparer(s2), FSharpSet__get_Tree(s2), FSharpSet__get_Tree(that)) | 0;
  }
  ["System.Collections.Generic.ICollection`1.Add2B595"](x2) {
    throw new Error("ReadOnlyCollection");
  }
  ["System.Collections.Generic.ICollection`1.Clear"]() {
    throw new Error("ReadOnlyCollection");
  }
  ["System.Collections.Generic.ICollection`1.Remove2B595"](x2) {
    throw new Error("ReadOnlyCollection");
  }
  ["System.Collections.Generic.ICollection`1.Contains2B595"](x2) {
    const s2 = this;
    return SetTreeModule_mem(FSharpSet__get_Comparer(s2), x2, FSharpSet__get_Tree(s2));
  }
  ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](arr, i2) {
    const s2 = this;
    SetTreeModule_copyToArray(FSharpSet__get_Tree(s2), arr, i2);
  }
  ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
    return true;
  }
  ["System.Collections.Generic.ICollection`1.get_Count"]() {
    const s2 = this;
    return FSharpSet__get_Count(s2) | 0;
  }
  ["System.Collections.Generic.IReadOnlyCollection`1.get_Count"]() {
    const s2 = this;
    return FSharpSet__get_Count(s2) | 0;
  }
  GetEnumerator() {
    const s2 = this;
    return SetTreeModule_mkIEnumerator(FSharpSet__get_Tree(s2));
  }
  [Symbol.iterator]() {
    return toIterator(this.GetEnumerator());
  }
  ["System.Collections.IEnumerable.GetEnumerator"]() {
    const s2 = this;
    return SetTreeModule_mkIEnumerator(FSharpSet__get_Tree(s2));
  }
  get size() {
    const s2 = this;
    return FSharpSet__get_Count(s2) | 0;
  }
  add(k2) {
    throw new Error("Set cannot be mutated");
  }
  clear() {
    throw new Error("Set cannot be mutated");
  }
  delete(k2) {
    throw new Error("Set cannot be mutated");
  }
  has(k2) {
    const s2 = this;
    return FSharpSet__Contains(s2, k2);
  }
  keys() {
    const s2 = this;
    return map((x2) => x2, s2);
  }
  values() {
    const s2 = this;
    return map((x2) => x2, s2);
  }
  entries() {
    const s2 = this;
    return map((v2) => [v2, v2], s2);
  }
  forEach(f2, thisArg) {
    const s2 = this;
    iterate$1((x2) => {
      f2(x2, x2, s2);
    }, s2);
  }
}
function FSharpSet_$ctor(comparer, tree) {
  return new FSharpSet(comparer, tree);
}
function FSharpSet__get_Comparer(set$) {
  return set$.comparer;
}
function FSharpSet__get_Tree(set$) {
  return set$.tree;
}
function FSharpSet_Empty(comparer) {
  return FSharpSet_$ctor(comparer, SetTreeModule_empty());
}
function FSharpSet__Add(s2, value2) {
  return FSharpSet_$ctor(FSharpSet__get_Comparer(s2), SetTreeModule_add(FSharpSet__get_Comparer(s2), value2, FSharpSet__get_Tree(s2)));
}
function FSharpSet__get_Count(s2) {
  return SetTreeModule_count(FSharpSet__get_Tree(s2));
}
function FSharpSet__Contains(s2, value2) {
  return SetTreeModule_mem(FSharpSet__get_Comparer(s2), value2, FSharpSet__get_Tree(s2));
}
function FSharpSet__ToArray(x2) {
  return SetTreeModule_toArray(FSharpSet__get_Tree(x2));
}
function FSharpSet__ComputeHashCode(this$) {
  let y;
  let res = 0;
  const enumerator = getEnumerator(this$);
  try {
    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
      const x_1 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
      res = (y = structuralHash(x_1) | 0, (res << 1) + y + 631) | 0;
    }
  } finally {
    enumerator.Dispose();
  }
  return Math.abs(res) | 0;
}
function contains(element, set$) {
  return FSharpSet__Contains(set$, element);
}
function add(value2, set$) {
  return FSharpSet__Add(set$, value2);
}
function empty(comparer) {
  return FSharpSet_Empty(comparer);
}
function count(set$) {
  return FSharpSet__get_Count(set$);
}
function ofList(elements, comparer) {
  return FSharpSet_$ctor(comparer, SetTreeModule_ofSeq(comparer, elements));
}
function toArray(set$) {
  return FSharpSet__ToArray(set$);
}
function ofSeq(elements, comparer) {
  return FSharpSet_$ctor(comparer, SetTreeModule_ofSeq(comparer, elements));
}
class Board_Color extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Cyan", "Blue", "Orange", "Yellow", "Green", "Purple", "Red", "Gray"];
  }
}
class Board_Cell extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Fragment", "Ghost"];
  }
}
class Board_Position extends Record {
  constructor(X, Y) {
    super();
    this.X = X | 0;
    this.Y = Y | 0;
  }
}
function Board_Position_op_Addition_795D2C60(_arg1, _arg2) {
  return new Board_Position(_arg1.X + _arg2.X, _arg1.Y + _arg2.Y);
}
const Board_BoardModule_width = 10;
const Board_BoardModule_height = 24;
class Tetromino_Tetromino extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["I", "L", "Z", "S", "T", "J", "O", "\u039B"];
  }
}
const Tetromino_eligiblePieces = ofList(ofArray([new Tetromino_Tetromino(0), new Tetromino_Tetromino(1), new Tetromino_Tetromino(2), new Tetromino_Tetromino(3), new Tetromino_Tetromino(4), new Tetromino_Tetromino(5), new Tetromino_Tetromino(6)]), {
  Compare: (x2, y) => compare(x2, y)
});
class Tetromino_Rotation extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Up", "Right", "Down", "Left"];
  }
}
class Tetromino_MetaInfo extends Record {
  constructor(Color) {
    super();
    this.Color = Color;
  }
}
function Tetromino_toMeta(_arg1) {
  switch (_arg1.tag) {
    case 5: {
      return new Tetromino_MetaInfo(new Board_Color(1));
    }
    case 1: {
      return new Tetromino_MetaInfo(new Board_Color(2));
    }
    case 6: {
      return new Tetromino_MetaInfo(new Board_Color(3));
    }
    case 3: {
      return new Tetromino_MetaInfo(new Board_Color(4));
    }
    case 4: {
      return new Tetromino_MetaInfo(new Board_Color(5));
    }
    case 2: {
      return new Tetromino_MetaInfo(new Board_Color(6));
    }
    case 7: {
      return new Tetromino_MetaInfo(new Board_Color(7));
    }
    default: {
      return new Tetromino_MetaInfo(new Board_Color(0));
    }
  }
}
function Tetromino_structure(rot, tetrimino) {
  return map((arg) => {
    let tupledArg_1;
    const tupledArg = arg;
    const x2 = tupledArg[0] | 0;
    const y = tupledArg[1] | 0;
    switch (rot.tag) {
      case 1: {
        tupledArg_1 = [op_UnaryNegation_Int32(y), x2];
        break;
      }
      case 2: {
        tupledArg_1 = [op_UnaryNegation_Int32(x2), op_UnaryNegation_Int32(y)];
        break;
      }
      case 3: {
        tupledArg_1 = [y, op_UnaryNegation_Int32(x2)];
        break;
      }
      default: {
        tupledArg_1 = [x2, y];
      }
    }
    return new Board_Position(tupledArg_1[0], tupledArg_1[1]);
  }, ofList$1(tetrimino.tag === 5 ? ofArray([[0, 0], [-1, 0], [0, -1], [0, -2]]) : tetrimino.tag === 1 ? ofArray([[0, 0], [1, 0], [0, -1], [0, -2]]) : tetrimino.tag === 6 ? ofArray([[0, 0], [0, 1], [1, 1], [1, 0]]) : tetrimino.tag === 3 ? ofArray([[1, 0], [0, 0], [0, 1], [-1, 1]]) : tetrimino.tag === 4 ? ofArray([[0, 0], [0, -1], [-1, 0], [1, 0]]) : tetrimino.tag === 2 ? ofArray([[-1, 0], [0, 0], [0, 1], [1, 1]]) : tetrimino.tag === 7 ? ofArray([[-1, -1], [0, 0], [-1, 1], [1, 1], [-2, 2], [2, 2]]) : ofArray([[0, 0], [0, -1], [0, 1], [0, -2]])));
}
class Game_ActivePiece extends Record {
  constructor(Tetromino, Position, Rotation) {
    super();
    this.Tetromino = Tetromino;
    this.Position = Position;
    this.Rotation = Rotation;
  }
}
class Game_HoldPiece extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Locked", "Unlocked"];
  }
}
class Game_ClockState extends Record {
  constructor(Ticks, DropFrequency) {
    super();
    this.Ticks = Ticks;
    this.DropFrequency = DropFrequency;
  }
}
class Game_GameState extends Record {
  constructor(Paused, PlacedBoard, ActivePiece, HoldPiece, EligiblePieces, QueuedPieces, Clock) {
    super();
    this.Paused = Paused;
    this.PlacedBoard = PlacedBoard;
    this.ActivePiece = ActivePiece;
    this.HoldPiece = HoldPiece;
    this.EligiblePieces = EligiblePieces;
    this.QueuedPieces = QueuedPieces;
    this.Clock = Clock;
  }
}
class Game_Spin extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Clockwise", "CounterClockwise"];
  }
}
function Game_SpinModule_nextRot(_arg1) {
  if (_arg1.tag === 1) {
    return (_arg3) => _arg3.tag === 1 ? new Tetromino_Rotation(0) : _arg3.tag === 2 ? new Tetromino_Rotation(1) : _arg3.tag === 3 ? new Tetromino_Rotation(2) : new Tetromino_Rotation(3);
  } else {
    return (_arg2) => _arg2.tag === 1 ? new Tetromino_Rotation(2) : _arg2.tag === 2 ? new Tetromino_Rotation(3) : _arg2.tag === 3 ? new Tetromino_Rotation(0) : new Tetromino_Rotation(1);
  }
}
class Game_ActivePieceMsg extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Drop", "HardDrop", "Hold", "UpdatePosition", "OffsetPosition", "UpdateRotation"];
  }
}
class Model_Msg extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Tick", "TogglePaused", "TriggerRestart", "LambdaMode", "UpdateActivePiece"];
  }
}
class BigNat extends Record {
  constructor(bound, digits) {
    super();
    this.bound = bound | 0;
    this.digits = digits;
  }
}
function BigNatModule_FFT_pow32(x_mut, n_mut) {
  BigNatModule_FFT_pow32:
    while (true) {
      const x2 = x_mut, n2 = n_mut;
      if (n2 === 0) {
        return 1;
      } else if (n2 % 2 === 0) {
        x_mut = x2 * x2;
        n_mut = ~~(n2 / 2);
        continue BigNatModule_FFT_pow32;
      } else {
        return x2 * BigNatModule_FFT_pow32(x2 * x2, ~~(n2 / 2)) | 0;
      }
    }
}
fromBits(2013265921, 0, false);
fromBits(2013265921, 0, true);
const BigNatModule_FFT_maxTwoPower = 29;
initialize$1(BigNatModule_FFT_maxTwoPower - 1, (i2) => BigNatModule_FFT_pow32(2, i2), Int32Array);
function BigNatModule_bound(n2) {
  return n2.bound;
}
function BigNatModule_coeff(n2, i2) {
  return n2.digits[i2];
}
function BigNatModule_coeff64(n2, i2) {
  return fromInteger(BigNatModule_coeff(n2, i2), false, 2);
}
function BigNatModule_setCoeff(n2, i2, v2) {
  n2.digits[i2] = v2 | 0;
}
function BigNatModule_pow64(x_mut, n_mut) {
  BigNatModule_pow64:
    while (true) {
      const x2 = x_mut, n2 = n_mut;
      if (n2 === 0) {
        return fromBits(1, 0, false);
      } else if (n2 % 2 === 0) {
        x_mut = op_Multiply(x2, x2);
        n_mut = ~~(n2 / 2);
        continue BigNatModule_pow64;
      } else {
        return op_Multiply(x2, BigNatModule_pow64(op_Multiply(x2, x2), ~~(n2 / 2)));
      }
    }
}
function BigNatModule_pow32(x_mut, n_mut) {
  BigNatModule_pow32:
    while (true) {
      const x2 = x_mut, n2 = n_mut;
      if (n2 === 0) {
        return 1;
      } else if (n2 % 2 === 0) {
        x_mut = x2 * x2;
        n_mut = ~~(n2 / 2);
        continue BigNatModule_pow32;
      } else {
        return x2 * BigNatModule_pow32(x2 * x2, ~~(n2 / 2)) | 0;
      }
    }
}
function BigNatModule_hash(n2) {
  let res = 0;
  for (let i2 = 0; i2 <= n2.bound - 1; i2++) {
    res = n2.digits[i2] + (res << 3) | 0;
  }
  return res | 0;
}
const BigNatModule_baseBits = 24;
const BigNatModule_baseN = 16777216;
const BigNatModule_baseNi64 = fromBits(16777216, 0, false);
const BigNatModule_baseMaski64 = fromBits(16777215, 0, false);
fromBits(16777215, 0, true);
function BigNatModule_createN(b2) {
  return new BigNat(b2, new Int32Array(b2));
}
function BigNatModule_copyN(x2) {
  return new BigNat(x2.bound, copy(x2.digits));
}
function BigNatModule_normN(n2) {
  const findLeastBound = (na_mut, i_mut) => {
    findLeastBound:
      while (true) {
        const na = na_mut, i2 = i_mut;
        if (i2 === -1 ? true : na[i2] !== 0) {
          return i2 + 1 | 0;
        } else {
          na_mut = na;
          i_mut = i2 - 1;
          continue findLeastBound;
        }
      }
  };
  const bound = findLeastBound(n2.digits, n2.bound - 1) | 0;
  n2.bound = bound | 0;
  return n2;
}
const BigNatModule_boundInt = 2;
const BigNatModule_boundInt64 = 3;
function BigNatModule_embed(x2) {
  const x_1 = (x2 < 0 ? 0 : x2) | 0;
  if (x_1 < BigNatModule_baseN) {
    const r2 = BigNatModule_createN(1);
    r2.digits[0] = x_1 | 0;
    return BigNatModule_normN(r2);
  } else {
    const r_1 = BigNatModule_createN(BigNatModule_boundInt);
    for (let i2 = 0; i2 <= BigNatModule_boundInt - 1; i2++) {
      r_1.digits[i2] = ~~(x_1 / BigNatModule_pow32(BigNatModule_baseN, i2)) % BigNatModule_baseN | 0;
    }
    return BigNatModule_normN(r_1);
  }
}
function BigNatModule_embed64(x2) {
  const x_1 = compare$1(x2, fromBits(0, 0, false)) < 0 ? fromBits(0, 0, false) : x2;
  const r2 = BigNatModule_createN(BigNatModule_boundInt64);
  for (let i2 = 0; i2 <= BigNatModule_boundInt64 - 1; i2++) {
    r2.digits[i2] = ~~toInt(op_Modulus(op_Division(x_1, BigNatModule_pow64(BigNatModule_baseNi64, i2)), BigNatModule_baseNi64)) | 0;
  }
  return BigNatModule_normN(r2);
}
function BigNatModule_eval32(n2) {
  if (n2.bound === 1) {
    return n2.digits[0] | 0;
  } else {
    let acc = 0;
    for (let i2 = n2.bound - 1; i2 >= 0; i2--) {
      acc = n2.digits[i2] + BigNatModule_baseN * acc | 0;
    }
    return acc | 0;
  }
}
const BigNatModule_one = BigNatModule_embed(1);
const BigNatModule_zero = BigNatModule_embed(0);
function BigNatModule_degree(n2) {
  return n2.bound - 1;
}
function BigNatModule_isZero(p2) {
  return p2.bound === 0;
}
function BigNatModule_equal(p2, q) {
  if (p2.bound === q.bound) {
    const check = (pa_mut, qa_mut, i_mut) => {
      check:
        while (true) {
          const pa = pa_mut, qa = qa_mut, i2 = i_mut;
          if (i2 === -1) {
            return true;
          } else if (pa[i2] === qa[i2]) {
            pa_mut = pa;
            qa_mut = qa;
            i_mut = i2 - 1;
            continue check;
          } else {
            return false;
          }
        }
    };
    return check(p2.digits, q.digits, p2.bound - 1);
  } else {
    return false;
  }
}
function BigNatModule_shiftCompare(p2, pn, q, qn) {
  if (p2.bound + pn < q.bound + qn) {
    return -1;
  } else if (p2.bound + pn > q.bound + pn) {
    return 1;
  } else {
    const check = (pa_mut, qa_mut, i_mut) => {
      check:
        while (true) {
          const pa = pa_mut, qa = qa_mut, i2 = i_mut;
          if (i2 === -1) {
            return 0;
          } else {
            const pai = (i2 < pn ? 0 : pa[i2 - pn]) | 0;
            const qai = (i2 < qn ? 0 : qa[i2 - qn]) | 0;
            if (pai === qai) {
              pa_mut = pa;
              qa_mut = qa;
              i_mut = i2 - 1;
              continue check;
            } else if (pai < qai) {
              return -1;
            } else {
              return 1;
            }
          }
        }
    };
    return check(p2.digits, q.digits, p2.bound + pn - 1) | 0;
  }
}
function BigNatModule_compare(p2, q) {
  if (p2.bound < q.bound) {
    return -1;
  } else if (p2.bound > q.bound) {
    return 1;
  } else {
    const check = (pa_mut, qa_mut, i_mut) => {
      check:
        while (true) {
          const pa = pa_mut, qa = qa_mut, i2 = i_mut;
          if (i2 === -1) {
            return 0;
          } else if (pa[i2] === qa[i2]) {
            pa_mut = pa;
            qa_mut = qa;
            i_mut = i2 - 1;
            continue check;
          } else if (pa[i2] < qa[i2]) {
            return -1;
          } else {
            return 1;
          }
        }
    };
    return check(p2.digits, q.digits, p2.bound - 1) | 0;
  }
}
function BigNatModule_lt(p2, q) {
  return BigNatModule_compare(p2, q) === -1;
}
function BigNatModule_mulSchoolBookBothSmall(p2, q) {
  const r2 = BigNatModule_createN(2);
  const rak = op_Multiply(fromInteger(p2, false, 2), fromInteger(q, false, 2));
  BigNatModule_setCoeff(r2, 0, ~~toInt(op_BitwiseAnd(rak, BigNatModule_baseMaski64)));
  BigNatModule_setCoeff(r2, 1, ~~toInt(op_Division(rak, BigNatModule_baseNi64)));
  return BigNatModule_normN(r2);
}
function BigNatModule_mulSchoolBookCarry(r_mut, c_mut, k_mut) {
  BigNatModule_mulSchoolBookCarry:
    while (true) {
      const r2 = r_mut, c2 = c_mut, k2 = k_mut;
      if (compare$1(c2, fromBits(0, 0, false)) > 0) {
        const rak = op_Addition(BigNatModule_coeff64(r2, k2), c2);
        BigNatModule_setCoeff(r2, k2, ~~toInt(op_BitwiseAnd(rak, BigNatModule_baseMaski64)));
        r_mut = r2;
        c_mut = op_Division(rak, BigNatModule_baseNi64);
        k_mut = k2 + 1;
        continue BigNatModule_mulSchoolBookCarry;
      }
      break;
    }
}
function BigNatModule_mulSchoolBookOneSmall(p2, q) {
  const bp = BigNatModule_bound(p2) | 0;
  const r2 = BigNatModule_createN(bp + 1);
  const q_1 = fromInteger(q, false, 2);
  let c2 = fromBits(0, 0, false);
  for (let i2 = 0; i2 <= bp - 1; i2++) {
    const rak = op_Addition(op_Addition(c2, BigNatModule_coeff64(r2, i2)), op_Multiply(BigNatModule_coeff64(p2, i2), q_1));
    BigNatModule_setCoeff(r2, i2, ~~toInt(op_BitwiseAnd(rak, BigNatModule_baseMaski64)));
    c2 = op_Division(rak, BigNatModule_baseNi64);
  }
  BigNatModule_mulSchoolBookCarry(r2, c2, bp);
  return BigNatModule_normN(r2);
}
function BigNatModule_mulSchoolBookNeitherSmall(p2, q) {
  const r2 = BigNatModule_createN(p2.bound + q.bound);
  const ra = r2.digits;
  for (let i2 = 0; i2 <= p2.bound - 1; i2++) {
    const pai = fromInteger(p2.digits[i2], false, 2);
    let c2 = fromBits(0, 0, false);
    let k2 = i2;
    for (let j = 0; j <= q.bound - 1; j++) {
      const qaj = fromInteger(q.digits[j], false, 2);
      const rak = op_Addition(op_Addition(fromInteger(ra[k2], false, 2), c2), op_Multiply(pai, qaj));
      ra[k2] = ~~toInt(op_BitwiseAnd(rak, BigNatModule_baseMaski64)) | 0;
      c2 = op_Division(rak, BigNatModule_baseNi64);
      k2 = k2 + 1 | 0;
    }
    BigNatModule_mulSchoolBookCarry(r2, c2, k2);
  }
  return BigNatModule_normN(r2);
}
function BigNatModule_mulSchoolBook(p2, q) {
  const pSmall = BigNatModule_bound(p2) === 1;
  const qSmall = BigNatModule_bound(q) === 1;
  if (pSmall && qSmall) {
    return BigNatModule_mulSchoolBookBothSmall(BigNatModule_coeff(p2, 0), BigNatModule_coeff(q, 0));
  } else if (pSmall) {
    return BigNatModule_mulSchoolBookOneSmall(q, BigNatModule_coeff(p2, 0));
  } else if (qSmall) {
    return BigNatModule_mulSchoolBookOneSmall(p2, BigNatModule_coeff(q, 0));
  } else {
    return BigNatModule_mulSchoolBookNeitherSmall(p2, q);
  }
}
class BigNatModule_encoding extends Record {
  constructor(bigL, twoToBigL, k2, bigK, bigN, split, splits) {
    super();
    this.bigL = bigL | 0;
    this.twoToBigL = twoToBigL | 0;
    this.k = k2 | 0;
    this.bigK = bigK | 0;
    this.bigN = bigN | 0;
    this.split = split | 0;
    this.splits = splits;
  }
}
function BigNatModule_mkEncoding(bigL, k2, bigK, bigN) {
  return new BigNatModule_encoding(bigL, BigNatModule_pow32(2, bigL), k2, bigK, bigN, ~~(BigNatModule_baseBits / bigL), initialize$1(~~(BigNatModule_baseBits / bigL), (i2) => BigNatModule_pow32(2, bigL * i2), Int32Array));
}
const BigNatModule_table = [BigNatModule_mkEncoding(1, 28, 268435456, 268435456), BigNatModule_mkEncoding(2, 26, 67108864, 134217728), BigNatModule_mkEncoding(3, 24, 16777216, 50331648), BigNatModule_mkEncoding(4, 22, 4194304, 16777216), BigNatModule_mkEncoding(5, 20, 1048576, 5242880), BigNatModule_mkEncoding(6, 18, 262144, 1572864), BigNatModule_mkEncoding(7, 16, 65536, 458752), BigNatModule_mkEncoding(8, 14, 16384, 131072), BigNatModule_mkEncoding(9, 12, 4096, 36864), BigNatModule_mkEncoding(10, 10, 1024, 10240), BigNatModule_mkEncoding(11, 8, 256, 2816), BigNatModule_mkEncoding(12, 6, 64, 768), BigNatModule_mkEncoding(13, 4, 16, 208)];
initialize$1(BigNatModule_baseBits, (i2) => BigNatModule_pow32(2, i2) - 1, Int32Array);
initialize$1(BigNatModule_baseBits, (i2) => BigNatModule_pow32(2, i2), Int32Array);
initialize$1(BigNatModule_baseBits, (i2) => BigNatModule_pow64(fromBits(2, 0, false), i2));
~~(BigNatModule_table[0].bigN / BigNatModule_baseBits);
function BigNatModule_mul(p2, q) {
  return BigNatModule_mulSchoolBook(p2, q);
}
function BigNatModule_scaleSubInPlace(x2, f2, a2, n2) {
  const patternInput = [x2.digits, BigNatModule_degree(x2)];
  const x_1 = patternInput[0];
  const patternInput_1 = [a2.digits, BigNatModule_degree(a2)];
  const ad = patternInput_1[1] | 0;
  const a_1 = patternInput_1[0];
  const f_1 = fromInteger(f2, false, 2);
  let j = 0;
  let z2 = op_Multiply(f_1, fromInteger(a_1[0], false, 2));
  while (compare$1(z2, fromBits(0, 0, false)) > 0 ? true : j < ad) {
    if (j > patternInput[1]) {
      throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
    }
    let zLo = ~~toInt(op_BitwiseAnd(z2, BigNatModule_baseMaski64));
    let zHi = op_Division(z2, BigNatModule_baseNi64);
    if (zLo <= x_1[j + n2]) {
      x_1[j + n2] = x_1[j + n2] - zLo | 0;
    } else {
      x_1[j + n2] = x_1[j + n2] + (BigNatModule_baseN - zLo) | 0;
      zHi = op_Addition(zHi, fromBits(1, 0, false));
    }
    if (j < ad) {
      z2 = op_Addition(zHi, op_Multiply(f_1, fromInteger(a_1[j + 1], false, 2)));
    } else {
      z2 = zHi;
    }
    j = j + 1 | 0;
  }
  BigNatModule_normN(x2);
}
function BigNatModule_scaleAddInPlace(x2, f2, a2, n2) {
  const patternInput = [x2.digits, BigNatModule_degree(x2)];
  const x_1 = patternInput[0];
  const patternInput_1 = [a2.digits, BigNatModule_degree(a2)];
  const ad = patternInput_1[1] | 0;
  const a_1 = patternInput_1[0];
  const f_1 = fromInteger(f2, false, 2);
  let j = 0;
  let z2 = op_Multiply(f_1, fromInteger(a_1[0], false, 2));
  while (compare$1(z2, fromBits(0, 0, false)) > 0 ? true : j < ad) {
    if (j > patternInput[1]) {
      throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
    }
    let zLo = ~~toInt(op_BitwiseAnd(z2, BigNatModule_baseMaski64));
    let zHi = op_Division(z2, BigNatModule_baseNi64);
    if (zLo < BigNatModule_baseN - x_1[j + n2]) {
      x_1[j + n2] = x_1[j + n2] + zLo | 0;
    } else {
      x_1[j + n2] = zLo - (BigNatModule_baseN - x_1[j + n2]) | 0;
      zHi = op_Addition(zHi, fromBits(1, 0, false));
    }
    if (j < ad) {
      z2 = op_Addition(zHi, op_Multiply(f_1, fromInteger(a_1[j + 1], false, 2)));
    } else {
      z2 = zHi;
    }
    j = j + 1 | 0;
  }
  BigNatModule_normN(x2);
}
function BigNatModule_removeFactor(x2, a2, n2) {
  const patternInput = [BigNatModule_degree(a2), BigNatModule_degree(x2)];
  const degx = patternInput[1] | 0;
  const dega = patternInput[0] | 0;
  if (degx < dega + n2) {
    return 0;
  } else {
    const patternInput_1 = [a2.digits, x2.digits];
    const xa = patternInput_1[1];
    const aa = patternInput_1[0];
    const f2 = (dega === 0 ? degx === n2 ? ~~(xa[n2] / aa[0]) : ~~toInt(op_Division(op_Addition(op_Multiply(fromInteger(xa[degx], false, 2), BigNatModule_baseNi64), fromInteger(xa[degx - 1], false, 2)), fromInteger(aa[0], false, 2))) : degx === dega + n2 ? ~~(xa[degx] / (aa[dega] + 1)) : ~~toInt(op_Division(op_Addition(op_Multiply(fromInteger(xa[degx], false, 2), BigNatModule_baseNi64), fromInteger(xa[degx - 1], false, 2)), op_Addition(fromInteger(aa[dega], false, 2), fromBits(1, 0, false))))) | 0;
    if (f2 === 0) {
      if (BigNatModule_shiftCompare(a2, n2, x2, 0) !== 1) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return f2 | 0;
    }
  }
}
function BigNatModule_divmod(b2, a2) {
  if (BigNatModule_isZero(a2)) {
    throw new Error();
  } else if (BigNatModule_degree(b2) < BigNatModule_degree(a2)) {
    return [BigNatModule_zero, b2];
  } else {
    const x2 = BigNatModule_copyN(b2);
    const d2 = BigNatModule_createN(BigNatModule_degree(b2) - BigNatModule_degree(a2) + 1 + 1);
    let p2 = BigNatModule_degree(b2);
    const m2 = BigNatModule_degree(a2) | 0;
    let n2 = p2 - m2;
    let finished = false;
    while (!finished) {
      const f2 = BigNatModule_removeFactor(x2, a2, n2) | 0;
      if (f2 > 0) {
        BigNatModule_scaleSubInPlace(x2, f2, a2, n2);
        BigNatModule_scaleAddInPlace(d2, f2, BigNatModule_one, n2);
      } else {
        finished = f2 === 0 && n2 === 0;
        if (!finished) {
          if (p2 === m2 + n2) {
            n2 = n2 - 1 | 0;
          } else {
            n2 = n2 - 1 | 0;
            p2 = p2 - 1 | 0;
          }
        }
      }
    }
    return [BigNatModule_normN(d2), BigNatModule_normN(x2)];
  }
}
BigNatModule_embed(2);
function BigNatModule_ofInt32(n2) {
  return BigNatModule_embed(n2);
}
function BigNatModule_ofInt64(n2) {
  return BigNatModule_embed64(n2);
}
function BigNatModule_toString(n2) {
  const degn = BigNatModule_degree(n2) | 0;
  const route = (prior_mut, k_mut, ten2k_mut) => {
    route:
      while (true) {
        const prior = prior_mut, k2 = k_mut, ten2k = ten2k_mut;
        if (BigNatModule_degree(ten2k) > degn) {
          return cons([k2, ten2k], prior);
        } else {
          prior_mut = cons([k2, ten2k], prior);
          k_mut = k2 + 1;
          ten2k_mut = BigNatModule_mul(ten2k, ten2k);
          continue route;
        }
      }
  };
  const collect2 = (isLeading_mut, digits_mut, n_1_mut, _arg1_mut) => {
    collect:
      while (true) {
        const isLeading = isLeading_mut, digits = digits_mut, n_1 = n_1_mut, _arg1 = _arg1_mut;
        if (!isEmpty(_arg1)) {
          const prior_1 = tail(_arg1);
          const patternInput = BigNatModule_divmod(n_1, head(_arg1)[1]);
          const nL = patternInput[1];
          const nH = patternInput[0];
          if (isLeading && BigNatModule_isZero(nH)) {
            isLeading_mut = isLeading;
            digits_mut = digits;
            n_1_mut = nL;
            _arg1_mut = prior_1;
            continue collect;
          } else {
            isLeading_mut = isLeading;
            digits_mut = collect2(false, digits, nL, prior_1);
            n_1_mut = nH;
            _arg1_mut = prior_1;
            continue collect;
          }
        } else {
          const n_2 = BigNatModule_eval32(n_1) | 0;
          if (isLeading && n_2 === 0) {
            return digits;
          } else {
            return cons(int32ToString(n_2), digits);
          }
        }
      }
  };
  const digits_4 = collect2(true, empty$2(), n2, route(empty$2(), 0, BigNatModule_embed(10)));
  if (isEmpty(digits_4)) {
    return "0";
  } else {
    return join("", toArray$1(digits_4));
  }
}
function BigNatModule_isSmall(n2) {
  return n2.bound <= 1;
}
function BigNatModule_getSmall(n2) {
  const z2 = n2;
  const i2 = 0;
  if (i2 < z2.bound) {
    return z2.digits[i2] | 0;
  } else {
    return 0;
  }
}
class BigInteger extends Record {
  constructor(signInt, v2) {
    super();
    this.signInt = signInt | 0;
    this.v = v2;
  }
  toString() {
    const x2 = this;
    const matchValue = BigInteger__get_SignInt(x2) | 0;
    switch (matchValue) {
      case -1: {
        return BigNatModule_isZero(BigInteger__get_V(x2)) ? "0" : "-" + BigNatModule_toString(BigInteger__get_V(x2));
      }
      case 0: {
        return "0";
      }
      case 1: {
        return BigNatModule_toString(BigInteger__get_V(x2));
      }
      default: {
        throw new Error("signs should be +/- 1 or 0");
      }
    }
  }
  Equals(obj) {
    const this$ = this;
    return obj instanceof BigInteger && BigInteger_op_Equality_56F059C0(this$, obj);
  }
  GetHashCode() {
    const x2 = this;
    return BigInteger_hash_Z665282C2(x2) | 0;
  }
  toJSON(_key) {
    const this$ = this;
    return toString(this$);
  }
  CompareTo(obj) {
    const this$ = this;
    if (obj instanceof BigInteger) {
      return BigInteger_compare_56F059C0(this$, obj) | 0;
    } else {
      throw new Error("the objects are not comparable\\nParameter name: obj");
    }
  }
}
function BigInteger_$ctor_Z2BE94A1(signInt, v2) {
  return new BigInteger(signInt, v2);
}
(() => {
  BigInteger.smallLim = 4096;
  BigInteger.smallPosTab = initialize$1(BigInteger.smallLim, (n2) => BigNatModule_ofInt32(n2));
  BigInteger.one = BigInteger_$ctor_Z524259A4(1);
  BigInteger.two = BigInteger_$ctor_Z524259A4(2);
  BigInteger.zero = BigInteger_$ctor_Z524259A4(0);
})();
function BigInteger_nat_Z67CCE57D(n2) {
  if (BigNatModule_isSmall(n2) && BigNatModule_getSmall(n2) < BigInteger.smallLim) {
    return BigInteger.smallPosTab[BigNatModule_getSmall(n2)];
  } else {
    return n2;
  }
}
function BigInteger__get_SignInt(x2) {
  return x2.signInt;
}
function BigInteger__get_V(x2) {
  return x2.v;
}
function BigInteger_op_Equality_56F059C0(x2, y) {
  const matchValue = [BigInteger__get_SignInt(x2), BigInteger__get_SignInt(y)];
  let pattern_matching_result;
  if (matchValue[0] === -1) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 1;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 8;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 3;
    } else {
      pattern_matching_result = 9;
    }
  } else if (matchValue[0] === 0) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 6;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 4;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 5;
    } else {
      pattern_matching_result = 9;
    }
  } else if (matchValue[0] === 1) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 2;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 7;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 9;
    }
  } else {
    pattern_matching_result = 9;
  }
  switch (pattern_matching_result) {
    case 0: {
      return BigNatModule_equal(BigInteger__get_V(x2), BigInteger__get_V(y));
    }
    case 1: {
      return BigNatModule_equal(BigInteger__get_V(x2), BigInteger__get_V(y));
    }
    case 2: {
      if (BigNatModule_isZero(BigInteger__get_V(x2))) {
        return BigNatModule_isZero(BigInteger__get_V(y));
      } else {
        return false;
      }
    }
    case 3: {
      if (BigNatModule_isZero(BigInteger__get_V(x2))) {
        return BigNatModule_isZero(BigInteger__get_V(y));
      } else {
        return false;
      }
    }
    case 4: {
      return true;
    }
    case 5: {
      return BigNatModule_isZero(BigInteger__get_V(y));
    }
    case 6: {
      return BigNatModule_isZero(BigInteger__get_V(y));
    }
    case 7: {
      return BigNatModule_isZero(BigInteger__get_V(x2));
    }
    case 8: {
      return BigNatModule_isZero(BigInteger__get_V(x2));
    }
    case 9: {
      throw new Error("signs should be +/- 1 or 0\\nParameter name: x");
    }
  }
}
function BigInteger_op_LessThan_56F059C0(x2, y) {
  const matchValue = [BigInteger__get_SignInt(x2), BigInteger__get_SignInt(y)];
  let pattern_matching_result;
  if (matchValue[0] === -1) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 1;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 8;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 3;
    } else {
      pattern_matching_result = 9;
    }
  } else if (matchValue[0] === 0) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 6;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 4;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 5;
    } else {
      pattern_matching_result = 9;
    }
  } else if (matchValue[0] === 1) {
    if (matchValue[1] === -1) {
      pattern_matching_result = 2;
    } else if (matchValue[1] === 0) {
      pattern_matching_result = 7;
    } else if (matchValue[1] === 1) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 9;
    }
  } else {
    pattern_matching_result = 9;
  }
  switch (pattern_matching_result) {
    case 0: {
      return BigNatModule_lt(BigInteger__get_V(x2), BigInteger__get_V(y));
    }
    case 1: {
      return BigNatModule_lt(BigInteger__get_V(y), BigInteger__get_V(x2));
    }
    case 2: {
      return false;
    }
    case 3: {
      if (!BigNatModule_isZero(BigInteger__get_V(x2))) {
        return true;
      } else {
        return !BigNatModule_isZero(BigInteger__get_V(y));
      }
    }
    case 4: {
      return false;
    }
    case 5: {
      return !BigNatModule_isZero(BigInteger__get_V(y));
    }
    case 6: {
      return false;
    }
    case 7: {
      return false;
    }
    case 8: {
      return !BigNatModule_isZero(BigInteger__get_V(x2));
    }
    case 9: {
      throw new Error("signs should be +/- 1 or 0\\nParameter name: x");
    }
  }
}
function BigInteger_compare_56F059C0(n2, nn) {
  if (BigInteger_op_LessThan_56F059C0(n2, nn)) {
    return -1;
  } else if (BigInteger_op_Equality_56F059C0(n2, nn)) {
    return 0;
  } else {
    return 1;
  }
}
function BigInteger_hash_Z665282C2(z2) {
  if (BigInteger__get_SignInt(z2) === 0) {
    return 1;
  } else {
    return BigInteger__get_SignInt(z2) + BigNatModule_hash(BigInteger__get_V(z2)) | 0;
  }
}
function BigInteger_$ctor_Z524259A4(n2) {
  if (n2 >= 0) {
    return BigInteger_$ctor_Z2BE94A1(1, BigInteger_nat_Z67CCE57D(BigNatModule_ofInt32(n2)));
  } else if (n2 === -2147483648) {
    return BigInteger_$ctor_Z2BE94A1(-1, BigInteger_nat_Z67CCE57D(BigNatModule_ofInt64(op_UnaryNegation(fromInteger(n2, false, 2)))));
  } else {
    return BigInteger_$ctor_Z2BE94A1(-1, BigInteger_nat_Z67CCE57D(BigNatModule_ofInt32(op_UnaryNegation_Int32(n2))));
  }
}
function makeRangeStepFunction(step, stop, zero, add2) {
  const stepComparedWithZero = compare(step, zero) | 0;
  if (stepComparedWithZero === 0) {
    throw new Error("The step of a range cannot be zero");
  }
  const stepGreaterThanZero = stepComparedWithZero > 0;
  return (x2) => {
    const comparedWithLast = compare(x2, stop) | 0;
    return (stepGreaterThanZero && comparedWithLast <= 0 ? true : !stepGreaterThanZero && comparedWithLast >= 0) ? [x2, add2(x2, step)] : void 0;
  };
}
function integralRangeStep(start, step, stop, zero, add2) {
  const stepFn = makeRangeStepFunction(step, stop, zero, add2);
  return delay(() => unfold(stepFn, start));
}
function rangeDouble(start, step, stop) {
  return integralRangeStep(start, step, stop, 0, (x2, y) => x2 + y);
}
function initBoard() {
  return ofSeq$1(delay(() => collect((i2) => map((j) => [new Board_Position(j, i2), void 0], rangeDouble(0, 1, Board_BoardModule_width - 1)), rangeDouble(0, 1, Board_BoardModule_height - 1))));
}
function randTetromino(eligiblePieces) {
  return toArray(eligiblePieces)[randomNext(0, count(eligiblePieces))];
}
function ActivePiece_init(tetromino) {
  return new Game_ActivePiece(tetromino, new Board_Position(~~(Board_BoardModule_width / 2) - 1, 2), new Tetromino_Rotation(0));
}
function nextPiece(eligiblePieces, queued) {
  let patternInput;
  if (isEmpty(queued)) {
    const xs_1 = toList(delay(() => collect((matchValue) => singleton$1(randTetromino(eligiblePieces)), rangeDouble(0, 1, 5))));
    patternInput = [head(xs_1), tail(xs_1)];
  } else {
    patternInput = [head(queued), append(tail(queued), singleton(randTetromino(eligiblePieces)))];
  }
  return [ActivePiece_init(patternInput[0]), patternInput[1]];
}
const initGameState = (() => {
  const patternInput = nextPiece(Tetromino_eligiblePieces, empty$2());
  return new Game_GameState(false, initBoard(), patternInput[0], new Game_HoldPiece(1, void 0), Tetromino_eligiblePieces, patternInput[1], new Game_ClockState(fromBits(0, 0, false), fromBits(75, 0, false)));
})();
function bindKeys(dispatch) {
  document.addEventListener("keydown", (evt) => {
    console.log("KEYDOWN");
    let msg;
    const matchValue = evt.code;
    switch (matchValue) {
      case "KeyP": {
        msg = new Model_Msg(1);
        break;
      }
      case "Escape": {
        msg = new Model_Msg(1);
        break;
      }
      case "KeyR": {
        msg = new Model_Msg(2);
        break;
      }
      case "KeyL": {
        msg = new Model_Msg(3);
        break;
      }
      case "Space": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(1));
        break;
      }
      case "KeyC": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(2));
        break;
      }
      case "ArrowUp": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(5, new Game_Spin(0)));
        break;
      }
      case "KeyZ": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(5, new Game_Spin(1)));
        break;
      }
      case "ArrowRight": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(4, new Board_Position(1, 0)));
        break;
      }
      case "ArrowDown": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(0));
        break;
      }
      case "ArrowLeft": {
        msg = new Model_Msg(4, new Game_ActivePieceMsg(4, new Board_Position(-1, 0)));
        break;
      }
      default: {
        msg = void 0;
      }
    }
    if (msg == null)
      ;
    else {
      dispatch(msg);
    }
  });
}
function validatePiece(board, _arg1) {
  return !contains$1(false, map((pos_1) => defaultArg(map$1((cellOpt) => cellOpt == null, FSharpMap__TryFind(board, pos_1)), false), map((y) => Board_Position_op_Addition_795D2C60(_arg1.Position, y), Tetromino_structure(_arg1.Rotation, _arg1.Tetromino))), {
    Equals: (x2, y_1) => x2 === y_1,
    GetHashCode: (x2) => structuralHash(x2)
  });
}
function handleTick(model) {
  const subs = singleton((dispatch) => {
    const ms = 25 * 0.1;
    return window.setTimeout(() => {
      dispatch(new Model_Msg(0));
    }, ms);
  });
  if (model.Paused) {
    return [model, subs];
  } else {
    const patternInput = model.Clock;
    const ticks$0027 = op_Addition(patternInput.Ticks, fromBits(1, 0, false));
    const model$0027 = new Game_GameState(model.Paused, model.PlacedBoard, model.ActivePiece, model.HoldPiece, model.EligiblePieces, model.QueuedPieces, new Game_ClockState(ticks$0027, model.Clock.DropFrequency));
    const dropSubOpt = equals$1(op_Modulus(ticks$0027, patternInput.DropFrequency), fromBits(0, 0, false)) ? (dispatch_1) => {
      dispatch_1(new Model_Msg(4, new Game_ActivePieceMsg(0)));
    } : void 0;
    return [model$0027, dropSubOpt == null ? subs : cons(dropSubOpt, subs)];
  }
}
function droppedPlacement(board_mut, piece_mut) {
  let patternInput;
  droppedPlacement:
    while (true) {
      const board = board_mut, piece = piece_mut;
      const piece$0027 = new Game_ActivePiece(piece.Tetromino, (patternInput = piece.Position, new Board_Position(patternInput.X, patternInput.Y + 1)), piece.Rotation);
      if (validatePiece(board, piece$0027)) {
        board_mut = board;
        piece_mut = piece$0027;
        continue droppedPlacement;
      } else {
        return piece;
      }
    }
}
function applyToBoard$1(board, _arg1) {
  const tetromino = _arg1.Tetromino;
  const cell = new Board_Cell(0, Tetromino_toMeta(tetromino).Color);
  return fold$1((board_1, pos_1) => FSharpMap__Add(board_1, pos_1, cell), board, map((y) => Board_Position_op_Addition_795D2C60(_arg1.Position, y), Tetromino_structure(_arg1.Rotation, tetromino)));
}
function clearLines(board) {
  const boardRows = sortByDescending((tupledArg_1) => tupledArg_1[0], groupBy((tupledArg) => tupledArg[0].Y, toSeq(board), {
    Equals: (x2, y_1) => x2 === y_1,
    GetHashCode: (x2) => numberHash(x2)
  }), {
    Compare: (x_1, y_3) => comparePrimitives(x_1, y_3)
  });
  const fullRowsDesc = sortDescending(fold$1((acc, tupledArg_2) => {
    if (!contains$1(void 0, map((tupledArg_3) => tupledArg_3[1], tupledArg_2[1]), {
      Equals: (x_2, y_5) => equals(x_2, y_5),
      GetHashCode: (x_2) => structuralHash(x_2)
    })) {
      return cons(tupledArg_2[0], acc);
    } else {
      return acc;
    }
  }, empty$2(), boardRows), {
    Compare: (x_3, y_6) => comparePrimitives(x_3, y_6)
  });
  return fold$1((acc_2, y_9) => fold$1((acc_3, x_5) => add$1(new Board_Position(x_5, y_9), void 0, acc_3), acc_2, rangeDouble(0, 1, Board_BoardModule_width - 1)), fold$1(uncurry(2, (tupledArg_4) => {
    const downOffset = tupledArg_4[0] | 0;
    const fullRowsDesc_1 = tupledArg_4[1];
    const board_1 = tupledArg_4[2];
    return (tupledArg_5) => !isEmpty(fullRowsDesc_1) && tupledArg_5[0] === head(fullRowsDesc_1) ? [downOffset + 1, tail(fullRowsDesc_1), board_1] : [downOffset, fullRowsDesc_1, fold$1((acc_1, tupledArg_6) => {
      const _arg5 = tupledArg_6[0];
      return add$1(new Board_Position(_arg5.X, _arg5.Y + downOffset), tupledArg_6[1], acc_1);
    }, board_1, tupledArg_5[1])];
  }), [0, fullRowsDesc, empty$1()], boardRows)[2], rangeDouble(0, 1, length(fullRowsDesc)));
}
function update(msg, model) {
  let board$0027_1, patternInput_2, matchValue_1, matchValue_2, holdPiece, patternInput_3, patternInput, board$0027, patternInput_1, matchValue;
  if (msg.tag === 1) {
    return [new Game_GameState(!model.Paused, model.PlacedBoard, model.ActivePiece, model.HoldPiece, model.EligiblePieces, model.QueuedPieces, model.Clock), empty$2()];
  } else if (msg.tag === 2) {
    return [initGameState, empty$2()];
  } else if (msg.tag === 3) {
    return [new Game_GameState(model.Paused, model.PlacedBoard, model.ActivePiece, model.HoldPiece, add(new Tetromino_Tetromino(7), model.EligiblePieces), model.QueuedPieces, model.Clock), empty$2()];
  } else if (msg.tag === 4) {
    if (!model.Paused) {
      if (msg.fields[0].tag === 1) {
        return [(board$0027_1 = clearLines(applyToBoard$1(model.PlacedBoard, droppedPlacement(model.PlacedBoard, model.ActivePiece))), patternInput_2 = nextPiece(model.EligiblePieces, model.QueuedPieces), new Game_GameState(model.Paused, board$0027_1, patternInput_2[0], (matchValue_1 = model.HoldPiece, matchValue_1.tag === 1 ? model.HoldPiece : new Game_HoldPiece(1, matchValue_1.fields[0])), model.EligiblePieces, patternInput_2[1], model.Clock)), empty$2()];
      } else if (msg.fields[0].tag === 2) {
        return [(matchValue_2 = model.HoldPiece, matchValue_2.tag === 1 ? (holdPiece = matchValue_2.fields[0], holdPiece == null ? (patternInput_3 = nextPiece(model.EligiblePieces, model.QueuedPieces), new Game_GameState(model.Paused, model.PlacedBoard, patternInput_3[0], new Game_HoldPiece(0, model.ActivePiece.Tetromino), model.EligiblePieces, patternInput_3[1], model.Clock)) : new Game_GameState(model.Paused, model.PlacedBoard, ActivePiece_init(holdPiece), new Game_HoldPiece(0, model.ActivePiece.Tetromino), model.EligiblePieces, model.QueuedPieces, model.Clock)) : model), empty$2()];
      } else if (msg.fields[0].tag === 3) {
        let piece$0027;
        const inputRecord_1 = model.ActivePiece;
        piece$0027 = new Game_ActivePiece(inputRecord_1.Tetromino, msg.fields[0].fields[0], inputRecord_1.Rotation);
        return [validatePiece(model.PlacedBoard, piece$0027) ? new Game_GameState(model.Paused, model.PlacedBoard, piece$0027, model.HoldPiece, model.EligiblePieces, model.QueuedPieces, model.Clock) : model, empty$2()];
      } else if (msg.fields[0].tag === 4) {
        return [model, Cmd_OfFunc_result(new Model_Msg(4, new Game_ActivePieceMsg(3, Board_Position_op_Addition_795D2C60(model.ActivePiece.Position, msg.fields[0].fields[0]))))];
      } else if (msg.fields[0].tag === 5) {
        let piece$0027_1;
        const inputRecord_2 = model.ActivePiece;
        piece$0027_1 = new Game_ActivePiece(inputRecord_2.Tetromino, inputRecord_2.Position, Game_SpinModule_nextRot(msg.fields[0].fields[0])(model.ActivePiece.Rotation));
        return [validatePiece(model.PlacedBoard, piece$0027_1) ? new Game_GameState(model.Paused, model.PlacedBoard, piece$0027_1, model.HoldPiece, model.EligiblePieces, model.QueuedPieces, model.Clock) : model, empty$2()];
      } else if (!validatePiece(model.PlacedBoard, model.ActivePiece)) {
        return [model, empty$2()];
      } else {
        let activePiece$0027;
        const inputRecord = model.ActivePiece;
        activePiece$0027 = new Game_ActivePiece(inputRecord.Tetromino, (patternInput = model.ActivePiece.Position, new Board_Position(patternInput.X, patternInput.Y + 1)), inputRecord.Rotation);
        return [validatePiece(model.PlacedBoard, activePiece$0027) ? new Game_GameState(model.Paused, model.PlacedBoard, activePiece$0027, model.HoldPiece, model.EligiblePieces, model.QueuedPieces, model.Clock) : (board$0027 = clearLines(applyToBoard$1(model.PlacedBoard, model.ActivePiece)), patternInput_1 = nextPiece(model.EligiblePieces, model.QueuedPieces), new Game_GameState(model.Paused, board$0027, patternInput_1[0], (matchValue = model.HoldPiece, matchValue.tag === 1 ? model.HoldPiece : new Game_HoldPiece(1, matchValue.fields[0])), model.EligiblePieces, patternInput_1[1], model.Clock)), empty$2()];
      }
    } else {
      return [model, empty$2()];
    }
  } else {
    return handleTick(model);
  }
}
function init() {
  return [initGameState, ofArray([(dispatch) => {
    dispatch(new Model_Msg(0));
  }, (dispatch_1) => {
    bindKeys(dispatch_1);
  }])];
}
function HookUtil_createDisposable(f2) {
  return {
    Dispose() {
      f2();
    }
  };
}
function HookUtil_delay(ms, f2) {
  setTimeout(f2, ms);
}
function HookUtil_runAsync(f2) {
  HookUtil_delay(0, f2);
}
class HookUtil_Effect extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["OnConnected", "OnRender"];
  }
}
class HookContext {
  constructor(host) {
    this["host@80"] = host;
    this._firstRun = true;
    this._rendering = false;
    this._args = [];
    this._stateIndex = 0;
    this._effectIndex = 0;
    this._states = [];
    this._effects = [];
    this._disposables = [];
  }
  get host() {
    const _2 = this;
    return _2["host@80"];
  }
  fail() {
    throw new Error("Hooks must be called consistently for each render call");
  }
  requestUpdate() {
    const _2 = this;
    _2["host@80"].requestUpdate();
  }
  renderWith(args) {
    const this$ = this;
    if (this$._firstRun ? true : !equalsWith((x2, y) => equals(x2, y), args, this$._args)) {
      this$._args = args;
      return this$.render();
    } else {
      return void 0;
    }
  }
  render() {
    const this$ = this;
    this$._stateIndex = 0;
    this$._effectIndex = 0;
    this$._rendering = true;
    const res = this$["host@80"].renderFn.apply(this$["host@80"], this$._args);
    if (!this$._firstRun && (this$._stateIndex !== this$._states.length ? true : this$._effectIndex !== this$._effects.length)) {
      this$.fail();
    }
    this$._rendering = false;
    if (this$["host@80"].isConnected) {
      this$.runEffects(this$._firstRun, true);
    }
    this$._firstRun = false;
    return res;
  }
  checkRendering() {
    const this$ = this;
    if (!this$._rendering) {
      this$.fail();
    }
  }
  runEffects(onConnected, onRender) {
    const _2 = this;
    HookUtil_runAsync(() => {
      iterate$1((_arg1) => {
        if (_arg1.tag === 0) {
          if (onConnected) {
            void _2._disposables.push(_arg1.fields[0]());
          }
        } else if (onRender) {
          _arg1.fields[0]();
        }
      }, _2._effects);
    });
  }
  setState(index, newValue, equals$12) {
    let newValue_1, oldValue;
    const _2 = this;
    if (!(newValue_1 = newValue, oldValue = _2._states[index], curry(2, equals$12) == null ? equals(oldValue, newValue_1) : equals$12(oldValue, newValue_1))) {
      _2._states[index] = newValue;
      if (!_2._rendering) {
        _2["host@80"].requestUpdate();
      } else {
        HookUtil_runAsync(() => {
          _2["host@80"].requestUpdate();
        });
      }
    }
  }
  getState() {
    const this$ = this;
    if (this$._stateIndex >= this$._states.length) {
      this$.fail();
    }
    const idx = this$._stateIndex | 0;
    this$._stateIndex = idx + 1 | 0;
    return [idx, this$._states[idx]];
  }
  addState(state) {
    const _2 = this;
    void _2._states.push(state);
    return [_2._states.length - 1, state];
  }
  disconnect() {
    const _2 = this;
    let enumerator = getEnumerator(_2._disposables);
    try {
      while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
        enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().Dispose();
      }
    } finally {
      enumerator.Dispose();
    }
    clear(_2._disposables);
  }
  useState(init2) {
    const this$ = this;
    this$.checkRendering();
    const patternInput = this$._firstRun ? this$.addState(init2()) : this$.getState();
    return [patternInput[1], (v2) => {
      this$.setState(patternInput[0], v2);
    }];
  }
  useRef(init2) {
    const this$ = this;
    this$.checkRendering();
    return this$._firstRun ? this$.addState(new FSharpRef(init2()))[1] : this$.getState()[1];
  }
  setEffect(effect) {
    const this$ = this;
    this$.checkRendering();
    if (this$._firstRun) {
      void this$._effects.push(effect);
    } else {
      if (this$._effectIndex >= this$._effects.length) {
        this$.fail();
      }
      const idx = this$._effectIndex | 0;
      this$._effectIndex = idx + 1 | 0;
      this$._effects[idx] = effect;
    }
  }
  useEffect(effect) {
    const this$ = this;
    this$.setEffect(new HookUtil_Effect(1, effect));
  }
  useEffectOnce(effect) {
    const this$ = this;
    this$.setEffect(new HookUtil_Effect(0, effect));
  }
}
function Lit_HookContext__HookContext_useMemo_FCFD9EF(ctx, init2) {
  return ctx.useRef(init2).contents;
}
function Hook_getContext_343DAFF1(this$) {
  if (this$ == null ? true : !(this$.hooks instanceof HookContext)) {
    throw new Error("Cannot access hook context, make sure the hook is called on top of a HookComponent function");
  }
  return this$.hooks;
}
function Hook_createDisposable_3A5B6456(f2) {
  return HookUtil_createDisposable(f2);
}
function LitElementUtil_isNotNull(x2) {
  return !(x2 == null);
}
function LitElementUtil_failInit() {
  throw new Error("LitElement.init must be called on top of the render function");
}
function LitElementUtil_failProps(key) {
  throw new Error(`'${key}' field in \`props\` record is not of Prop<'T> type`);
}
class Prop {
  constructor(defaultValue, options) {
    this.defaultValue = defaultValue;
    this.options = options;
  }
}
class Prop$1 extends Prop {
  constructor(defaultValue, options) {
    super(defaultValue, options);
    this.defaultValue_1 = defaultValue;
  }
}
function Prop$1_$ctor_4E398B2E(defaultValue, options) {
  return new Prop$1(defaultValue, options);
}
function Prop__ToConfig(_2) {
  return [_2.defaultValue, _2.options];
}
function Prop_Of_6B8EFA6B(defaultValue, attribute, hasChanged, fromAttribute, toAttribute, reflect) {
  return Prop$1_$ctor_4E398B2E(defaultValue, jsOptions((o2) => {
    let matchValue;
    iterate$1((v2) => {
      o2.type = v2;
    }, toArray$3((matchValue = defaultValue, typeof matchValue === "string" ? some(String) : typeof matchValue === "number" ? some(Number) : typeof matchValue === "number" ? some(Number) : typeof matchValue === "boolean" ? some(Boolean) : void 0)));
    iterate$1((v_1) => {
      o2.reflect = v_1;
    }, toArray$3(reflect));
    iterate$1(mapCurriedArgs((v_2) => {
      o2.hasChanged = curry(2, v_2);
    }, [[0, 2]]), toArray$3(curry(2, hasChanged)));
    iterate$1((att) => {
      const matchValue_1 = att.trim();
      switch (matchValue_1) {
        case null:
        case "": {
          o2.attribute = false;
          break;
        }
        default: {
          o2.attribute = matchValue_1;
        }
      }
    }, toArray$3(attribute));
    const matchValue_2 = [fromAttribute, toAttribute];
    let pattern_matching_result;
    if (matchValue_2[0] != null) {
      pattern_matching_result = 0;
    } else if (matchValue_2[1] != null) {
      pattern_matching_result = 0;
    } else {
      pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
      case 0: {
        o2.converter = jsOptions((o_1) => {
          iterate$1((v_3) => {
            o_1.fromAttribute = v_3;
          }, toArray$3(fromAttribute));
          iterate$1((v_4) => {
            o_1.toAttribute = v_4;
          }, toArray$3(toAttribute));
        });
        break;
      }
    }
  }));
}
class LitElementInit$1 {
  constructor() {
    this._initPromise = null;
    this._useShadowDom = true;
    this._props = null;
    this._styles = null;
  }
  get props() {
    const _2 = this;
    return _2._props;
  }
  set props(v2) {
    const _2 = this;
    _2._props = v2;
  }
  get styles() {
    const _2 = this;
    return _2._styles;
  }
  set styles(v2) {
    const _2 = this;
    _2._styles = v2;
  }
  get useShadowDom() {
    const _2 = this;
    return _2._useShadowDom;
  }
  set useShadowDom(v2) {
    const _2 = this;
    _2._useShadowDom = v2;
  }
  init(initFn) {
    const this$ = this;
    this$._initPromise = initFn(this$);
    return [null, null];
  }
  get hooks() {
    return LitElementUtil_failInit();
  }
}
function LitElementInit$1_$ctor() {
  return new LitElementInit$1();
}
function LitElementInit$1__get_InitPromise(_2) {
  return _2._initPromise;
}
class LitHookElement$1 extends s {
  constructor(initProps) {
    super();
    this._hooks = new HookContext(this);
    initProps(this);
  }
  render() {
    const _2 = this;
    return _2._hooks.render();
  }
  disconnectedCallback() {
    const _2 = this;
    super.disconnectedCallback();
    _2._hooks.disconnect();
  }
  init(_arg1) {
    const this$ = this;
    return [this$, this$];
  }
  get hooks() {
    const _2 = this;
    return _2._hooks;
  }
}
class LitElementAttribute extends Attribute {
  constructor(name) {
    super();
    this.name = name;
  }
  Decorate(renderFn) {
    const this$ = this;
    const config = LitElementInit$1_$ctor();
    if (renderFn.length > 0) {
      throw new Error("Render function for LitElement cannot take arguments");
    }
    try {
      renderFn.apply(config, []);
    } catch (matchValue) {
    }
    if (LitElementInit$1__get_InitPromise(config) == null) {
      LitElementUtil_failInit();
    }
    const pr = LitElementInit$1__get_InitPromise(config);
    void pr.then(() => {
      let source2;
      const config_1 = config;
      const styles = LitElementUtil_isNotNull(config_1.styles) ? toArray$1(config_1.styles) : void 0;
      let patternInput_1;
      if (LitElementUtil_isNotNull(config_1.props)) {
        const propsValues = [];
        const propsOptions = {};
        iterate$1((tupledArg) => {
          const k2 = tupledArg[0];
          let patternInput;
          const matchValue_1 = tupledArg[1];
          patternInput = matchValue_1 instanceof Prop ? Prop__ToConfig(matchValue_1) : LitElementUtil_failProps(k2);
          const defVal = patternInput[0];
          propsOptions[k2] = patternInput[1];
          if (!(defVal == null)) {
            void propsValues.push([k2, defVal]);
          }
        }, (source2 = Object.values(config_1.props), zip(Object.keys(config_1.props), source2)));
        patternInput_1 = [some(propsOptions), (this$_1) => {
          iterate$1((tupledArg_1) => {
            this$_1[tupledArg_1[0]] = tupledArg_1[1];
          }, propsValues);
        }];
      } else {
        patternInput_1 = [void 0, (_arg1) => {
        }];
      }
      const classExpr = class extends LitHookElement$1 {
        constructor() {
          super(patternInput_1[1]);
        }
        get renderFn() {
          return renderFn;
        }
      };
      iterate$1((props) => {
        Object.defineProperty(classExpr, "properties", { get: () => props });
      }, toArray$3(patternInput_1[0]));
      iterate$1((styles_1) => {
        Object.defineProperty(classExpr, "styles", { get: () => styles_1 });
      }, toArray$3(styles));
      if (!config_1.useShadowDom) {
        classExpr.prototype.createRenderRoot = function() {
          return this;
        };
      }
      customElements.define(this$.name, classExpr);
    });
    return () => {
      throw new Error(`${this$.name} is not immediately callable, it must be created in HTML`);
    };
  }
}
class RingState$1 extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["Writable", "ReadWritable"];
  }
}
class RingBuffer$1 {
  constructor(size) {
    this.state = new RingState$1(0, fill(new Array(max((x2, y) => comparePrimitives(x2, y), size, 10)), 0, max((x2, y) => comparePrimitives(x2, y), size, 10), null), 0);
  }
}
function RingBuffer$1_$ctor_Z524259A4(size) {
  return new RingBuffer$1(size);
}
function RingBuffer$1__Pop(__) {
  const matchValue = __.state;
  if (matchValue.tag === 1) {
    const wix = matchValue.fields[1] | 0;
    const rix = matchValue.fields[2] | 0;
    const items = matchValue.fields[0];
    const rix$0027 = (rix + 1) % items.length | 0;
    if (rix$0027 === wix) {
      __.state = new RingState$1(0, items, wix);
    } else {
      __.state = new RingState$1(1, items, wix, rix$0027);
    }
    return some(items[rix]);
  } else {
    return void 0;
  }
}
function RingBuffer$1__Push_2B595(__, item) {
  const matchValue = __.state;
  if (matchValue.tag === 1) {
    const wix_1 = matchValue.fields[1] | 0;
    const rix = matchValue.fields[2] | 0;
    const items_1 = matchValue.fields[0];
    items_1[wix_1] = item;
    const wix$0027 = (wix_1 + 1) % items_1.length | 0;
    if (wix$0027 === rix) {
      __.state = new RingState$1(1, RingBuffer$1__doubleSize(__, rix, items_1), items_1.length, 0);
    } else {
      __.state = new RingState$1(1, items_1, wix$0027, rix);
    }
  } else {
    const ix = matchValue.fields[1] | 0;
    const items = matchValue.fields[0];
    items[ix] = item;
    const wix = (ix + 1) % items.length | 0;
    __.state = new RingState$1(1, items, wix, ix);
  }
}
function RingBuffer$1__doubleSize(this$, ix, items) {
  return Array.from(delay(() => append$1(skip(ix, items), delay(() => append$1(take(ix, items), delay(() => collect((matchValue) => singleton$1(null), rangeDouble(0, 1, items.length))))))));
}
class Program$4 extends Record {
  constructor(init2, update2, subscribe, view2, setState, onError, syncDispatch) {
    super();
    this.init = init2;
    this.update = update2;
    this.subscribe = subscribe;
    this.view = view2;
    this.setState = setState;
    this.onError = onError;
    this.syncDispatch = syncDispatch;
  }
}
function ProgramModule_mkProgram(init2, update2, view2) {
  return new Program$4(init2, update2, (_arg1) => Cmd_none(), view2, (model, arg) => {
    view2(model, arg);
  }, (tupledArg) => {
    Log_onError(tupledArg[0], tupledArg[1]);
  }, uncurry(2, (x2) => x2));
}
function ProgramModule_withSetState(setState, program) {
  return new Program$4(program.init, program.update, program.subscribe, program.view, setState, program.onError, program.syncDispatch);
}
function ProgramModule_runWith(arg, program) {
  const patternInput = program.init(arg);
  const model = patternInput[0];
  const rb = RingBuffer$1_$ctor_Z524259A4(10);
  let reentered = false;
  let state = model;
  const dispatch = (msg) => {
    if (reentered) {
      RingBuffer$1__Push_2B595(rb, msg);
    } else {
      reentered = true;
      let nextMsg = some(msg);
      while (nextMsg != null) {
        const msg_1 = value(nextMsg);
        try {
          const patternInput_1 = program.update(msg_1, state);
          const model$0027 = patternInput_1[0];
          program.setState(model$0027, syncDispatch);
          Cmd_exec((ex) => {
            program.onError([toText(printf("Error in command while handling: %A"))(msg_1), ex]);
          }, syncDispatch, patternInput_1[1]);
          state = model$0027;
        } catch (ex_1) {
          program.onError([toText(printf("Unable to process the message: %A"))(msg_1), ex_1]);
        }
        nextMsg = RingBuffer$1__Pop(rb);
      }
      reentered = false;
    }
  };
  const syncDispatch = partialApply(1, program.syncDispatch, [dispatch]);
  program.setState(model, syncDispatch);
  Cmd_exec((ex_3) => {
    program.onError(["Error intitializing:", ex_3]);
  }, syncDispatch, Cmd_batch(ofArray([(() => {
    try {
      return program.subscribe(model);
    } catch (ex_2) {
      program.onError(["Unable to subscribe:", ex_2]);
      return Cmd_none();
    }
  })(), patternInput[1]])));
}
function ProgramModule_run(program) {
  ProgramModule_runWith(void 0, program);
}
function Program_mkHidden(init2, update2) {
  return ProgramModule_mkProgram(init2, update2, (_arg2, _arg1) => {
  });
}
class LitElmishExtensions_ElmishObservable$2 {
  constructor() {
    this.state = void 0;
    this.listener = void 0;
    this.dispatcher = void 0;
  }
}
function LitElmishExtensions_ElmishObservable$2_$ctor() {
  return new LitElmishExtensions_ElmishObservable$2();
}
function LitElmishExtensions_ElmishObservable$2__get_Value(_2) {
  return _2.state;
}
function LitElmishExtensions_ElmishObservable$2__SetState(_2, model, dispatch) {
  _2.state = some(model);
  _2.dispatcher = dispatch;
  const matchValue = _2.listener;
  if (matchValue != null) {
    matchValue(model);
  }
}
function LitElmishExtensions_ElmishObservable$2__Dispatch_2B594(_2, msg) {
  const matchValue = _2.dispatcher;
  if (matchValue != null) {
    matchValue(msg);
  }
}
function LitElmishExtensions_ElmishObservable$2__Subscribe_5028453F(_2, f2) {
  const matchValue = _2.listener;
  if (matchValue == null) {
    _2.listener = f2;
  }
}
function LitElmishExtensions_useElmish(ctx, program) {
  const obs = Lit_HookContext__HookContext_useMemo_FCFD9EF(ctx, LitElmishExtensions_ElmishObservable$2_$ctor);
  const patternInput = ctx.useState(() => {
    ProgramModule_run(ProgramModule_withSetState((arg00, arg10) => {
      LitElmishExtensions_ElmishObservable$2__SetState(obs, arg00, arg10);
    }, program()));
    const matchValue = LitElmishExtensions_ElmishObservable$2__get_Value(obs);
    if (matchValue != null) {
      return value(matchValue);
    } else {
      throw new Error("Elmish program has not initialized");
    }
  });
  const state = patternInput[0];
  ctx.useEffectOnce(() => Hook_createDisposable_3A5B6456(() => {
    const matchValue_1 = state;
    if (isDisposable(matchValue_1)) {
      matchValue_1.Dispose();
    }
  }));
  LitElmishExtensions_ElmishObservable$2__Subscribe_5028453F(obs, patternInput[1]);
  return [state, (arg00_1) => {
    LitElmishExtensions_ElmishObservable$2__Dispatch_2B594(obs, arg00_1);
  }];
}
function toCellClass(_arg1) {
  if (_arg1.tag === 1) {
    return "ghost";
  } else {
    const color = _arg1.fields[0];
    switch (color.tag) {
      case 1: {
        return "blue";
      }
      case 2: {
        return "orange";
      }
      case 3: {
        return "yellow";
      }
      case 4: {
        return "green";
      }
      case 5: {
        return "purple";
      }
      case 6: {
        return "red";
      }
      case 7: {
        return "gray";
      }
      default: {
        return "cyan";
      }
    }
  }
}
function cellElm(pos, model) {
  let elmClass;
  const arg10 = model == null ? "empty" : toCellClass(model);
  elmClass = toText(printf("cell %s"))(arg10);
  return LitHelpers_html(fmt`
    <div data-col=${pos.X} class=${elmClass}></div>
    `);
}
function boardElm(model) {
  const rows = groupBy((tupledArg_1) => tupledArg_1[0].Y, sortBy((tupledArg) => {
    const pos = tupledArg[0];
    return [pos.Y, pos.X];
  }, toSeq(model), {
    Compare: (x2, y) => compareArrays(x2, y)
  }), {
    Equals: (x_1, y_1) => x_1 === y_1,
    GetHashCode: (x_1) => numberHash(x_1)
  });
  return LitHelpers_html(fmt`
    <div class="board main">
    ${ofSeq$2(map((tupledArg_3) => LitHelpers_html(fmt`
    <div data-row="${tupledArg_3[0]}" class="row" >
    ${ofSeq$2(map((tupledArg_2) => cellElm(tupledArg_2[0], tupledArg_2[1]), tupledArg_3[1]))}
    </div>
    `), rows))}
    </div>
    `);
}
class BoardPiece extends Union {
  constructor(tag, ...fields) {
    super();
    this.tag = tag | 0;
    this.fields = fields;
  }
  cases() {
    return ["TetroPiece", "GhostPiece"];
  }
}
function applyToBoard(board, piece) {
  let patternInput;
  if (piece.tag === 1) {
    patternInput = [piece.fields[0].Position, piece.fields[0].Rotation, piece.fields[0].Tetromino, new Board_Cell(1)];
  } else {
    const tetro = piece.fields[0].Tetromino;
    patternInput = [piece.fields[0].Position, piece.fields[0].Rotation, tetro, new Board_Cell(0, Tetromino_toMeta(tetro).Color)];
  }
  return fold$1((acc, offset) => {
    const activeCellPosition = Board_Position_op_Addition_795D2C60(patternInput[0], offset);
    if (activeCellPosition.X < 0 ? true : activeCellPosition.Y < 0) {
      return acc;
    } else {
      return FSharpMap__Add(acc, activeCellPosition, patternInput[3]);
    }
  }, board, Tetromino_structure(patternInput[1], patternInput[2]));
}
const MiniBoard_size = 6;
function miniBoard(boardClass, cellSize, tetroOpt) {
  let x2;
  let body;
  const structure = tetroOpt == null ? empty({
    Compare: (x_2, y_2) => compare(x_2, y_2)
  }) : ofSeq(map((x2 = new Board_Position(2, 2), (y) => Board_Position_op_Addition_795D2C60(x2, y)), Tetromino_structure(new Tetromino_Rotation(0), tetroOpt)), {
    Compare: (x_1, y_1) => compare(x_1, y_1)
  });
  body = initialize(MiniBoard_size, (y_3) => LitHelpers_html(fmt`
    <div class="row" >
    ${initialize(MiniBoard_size, (x_3) => {
    let cellType_1;
    const matchValue = [tetroOpt, contains(new Board_Position(x_3, y_3), structure)];
    let pattern_matching_result, tetro_1;
    if (matchValue[0] != null) {
      if (matchValue[1]) {
        pattern_matching_result = 0;
        tetro_1 = matchValue[0];
      } else {
        pattern_matching_result = 1;
      }
    } else {
      pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
      case 0: {
        cellType_1 = toCellClass(new Board_Cell(0, Tetromino_toMeta(tetro_1).Color));
        break;
      }
      case 1: {
        cellType_1 = "empty";
        break;
      }
    }
    const sizePx = toText(printf("%ipx"))(cellSize);
    return LitHelpers_html(fmt`<div style="width:${sizePx}; height:${sizePx}" class=${"cell " + cellType_1}></div>`);
  })}
    </div>
    `));
  return LitHelpers_html(fmt`
    <div class=${toText(printf("board %s"))(boardClass)}>
    ${body}
    </div>
    `);
}
function holdElm(holdPiece) {
  return miniBoard("hold", 15, holdPiece.tag === 1 ? holdPiece.fields[0] : holdPiece.fields[0]);
}
function controlsElm(lambdaEnabled) {
  const controls = ofArray([["L", lambdaEnabled ? "\u03BB mode enabled" : "???"], ["R", "restart"], ["Esc/P", "pause"], ["Up", "rotate CW"], ["Right", "move right"], ["Left", "move left"], ["Down", "move down"], ["Space", "hard drop"], ["C", "hold"], ["Z", "rotate CCW"]]);
  return LitHelpers_html(fmt`
    <ul class="board info" style="margin-top: 15px;">
    ${fold((acc, tupledArg) => {
    let props;
    const label_1 = tupledArg[0];
    return cons((props = label_1 === "L" ? "color:#ff5252" : "", LitHelpers_html(fmt`
        <li style="${props}" >${label_1} -
        <span class="description" style="${props}" >${tupledArg[1]}</span>
        </li>
        `)), acc);
  }, empty$2(), controls)}
    </ul>
    `);
}
const creditsElm = LitHelpers_html(fmt`
<div class="board info">
<a href="https://github.com/jamieday/FunkyTetris">View on GitHub</a>
<a style="margin-top:5px"  href="http://jamieday.ca">More stuff</a>
</div>
`);
function queuedElm(queued) {
  const hr = LitHelpers_html(fmt`<hr />`);
  return LitHelpers_html(fmt`
    <div class="queued">
    ${foldBack((tetro, acc) => cons(miniBoard("queued", 10, tetro), isEmpty(acc) ? empty$2() : cons(hr, acc)), queued, empty$2())}
    </div>
    `);
}
function view(model, dispatch) {
  const infoColRendered = LitHelpers_html(fmt`
    <div class="info">
    ${holdElm(model.HoldPiece)}
    ${controlsElm(contains(new Tetromino_Tetromino(7), model.EligiblePieces))}
    ${creditsElm}
    </div>
    `);
  const boardColRendered = boardElm(applyToBoard(applyToBoard(model.PlacedBoard, new BoardPiece(1, droppedPlacement(model.PlacedBoard, model.ActivePiece))), new BoardPiece(0, model.ActivePiece)));
  const queuedColRendered = queuedElm(model.QueuedPieces);
  let gameClass;
  const arg10 = model.Paused ? "paused" : "active";
  gameClass = toText(printf("game %s"))(arg10);
  return LitHelpers_html(fmt`
    <div class="${gameClass}" style="margin-left: 2rem;">
    ${infoColRendered}
    ${boardColRendered}
    ${queuedColRendered}
    </div>
    `);
}
new LitElementAttribute("evilz-tetris").Decorate(function() {
  this.init((arg) => {
    const config = arg;
    config.useShadowDom = false;
    config.props = {
      initial: Prop_Of_6B8EFA6B(0)
    };
    config.styles = singleton(LitHelpers_css(fmt`
        :host {
        background-color: #555;
        color: #4a4a4a;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        display: block;
        }
        .root-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        }
        .game {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        }
        `));
    return Promise.resolve(void 0);
  });
  const patternInput_1 = LitElmishExtensions_useElmish(Hook_getContext_343DAFF1(this), () => Program_mkHidden(init, (msg, model) => update(msg, model)));
  return view(patternInput_1[0]);
});
function register() {
}
export { register as registerTetris };
