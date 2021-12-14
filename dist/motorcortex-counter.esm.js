import MotorCortex from '@donkeyclip/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$p = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$6 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$5 = fails$6; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var call$4 = Function.prototype.call;
var functionCall = call$4.bind ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$3 = FunctionPrototype$1.call;
var callBind = bind && bind.bind(call$3);
var functionUncurryThis = bind ? function (fn) {
  return fn && callBind(call$3, fn);
} : function (fn) {
  return fn && function () {
    return call$3.apply(fn, arguments);
  };
};

var uncurryThis$a = functionUncurryThis;
var toString$3 = uncurryThis$a({}.toString);
var stringSlice$1 = uncurryThis$a(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$1(toString$3(it), 8, -1);
};

var global$o = global$p;
var uncurryThis$9 = functionUncurryThis;
var fails$4 = fails$6;
var classof$2 = classofRaw$1;
var Object$4 = global$o.Object;
var split = uncurryThis$9(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$4(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$2(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$n = global$p;
var TypeError$7 = global$n.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw TypeError$7("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$a = function (argument) {
  return typeof argument == 'function';
};

var isCallable$9 = isCallable$a;

var isObject$5 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$9(it);
};

var global$m = global$p;
var isCallable$8 = isCallable$a;

var aFunction = function (argument) {
  return isCallable$8(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
};

var uncurryThis$8 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

var getBuiltIn$2 = getBuiltIn$3;
var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

var global$l = global$p;
var userAgent = engineUserAgent;
var process = global$l.process;
var Deno = global$l.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$3 = fails$6; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$3(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$k = global$p;
var getBuiltIn$1 = getBuiltIn$3;
var isCallable$7 = isCallable$a;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$k.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$1('Symbol');
  return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$j = global$p;
var String$4 = global$j.String;

var tryToString$1 = function (argument) {
  try {
    return String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$i = global$p;
var isCallable$6 = isCallable$a;
var tryToString = tryToString$1;
var TypeError$6 = global$i.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$6(argument)) return argument;
  throw TypeError$6(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$h = global$p;
var call$2 = functionCall;
var isCallable$5 = isCallable$a;
var isObject$4 = isObject$5;
var TypeError$5 = global$h.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
  if (isCallable$5(fn = input.valueOf) && !isObject$4(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
  throw TypeError$5("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$g = global$p; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$g, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$g[key] = value;
  }

  return value;
};

var global$f = global$p;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$f[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$e = global$p;
var requireObjectCoercible$1 = requireObjectCoercible$3;
var Object$2 = global$e.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$1 = function (argument) {
  return Object$2(requireObjectCoercible$1(argument));
};

var uncurryThis$7 = functionUncurryThis;
var toObject = toObject$1;
var hasOwnProperty = uncurryThis$7({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var uncurryThis$6 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$6(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
};

var global$d = global$p;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$d.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$3 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$c = global$p;
var call$1 = functionCall;
var isObject$3 = isObject$5;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$2 = wellKnownSymbol$3;
var TypeError$4 = global$c.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$3(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$3(result) || isSymbol$1(result)) return result;
    throw TypeError$4("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$b = global$p;
var isObject$2 = isObject$5;
var document = global$b.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$2(document) && isObject$2(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document.createElement(it) : {};
};

var DESCRIPTORS$4 = descriptors;
var fails$2 = fails$6;
var createElement = documentCreateElement; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$4 && !fails$2(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$3 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var global$a = global$p;
var isObject$1 = isObject$5;
var String$3 = global$a.String;
var TypeError$3 = global$a.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$1(argument)) return argument;
  throw TypeError$3(String$3(argument) + ' is not an object');
};

var global$9 = global$p;
var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$1 = anObject$2;
var toPropertyKey = toPropertyKey$2;
var TypeError$2 = global$9.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$1 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;
var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$5 = functionUncurryThis;
var isCallable$4 = isCallable$a;
var store$1 = sharedStore;
var functionToString = uncurryThis$5(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$4(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var global$8 = global$p;
var isCallable$3 = isCallable$a;
var inspectSource$1 = inspectSource$2;
var WeakMap$1 = global$8.WeakMap;
var nativeWeakMap = isCallable$3(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$7 = global$p;
var uncurryThis$4 = functionUncurryThis;
var isObject = isObject$5;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$7.TypeError;
var WeakMap = global$7.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$4(store.get);
  var wmhas = uncurryThis$4(store.has);
  var wmset = uncurryThis$4(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$6 = global$p;
var isCallable$2 = isCallable$a;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource = inspectSource$2;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$2(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$6) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$2(this) && getInternalState(this).source || inspectSource(this);
});

var objectGetOwnPropertyNames = {};

var ceil$1 = Math.ceil;
var floor$2 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$2 : ceil$1)(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$1 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$3 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$3([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }

  return result;
};

var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn = getBuiltIn$3;
var uncurryThis$2 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$2([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$1 = fails$6;
var isCallable$1 = isCallable$a;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$1(detection) ? fails$1(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$5 = global$p;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$5;
  } else if (STATIC) {
    target = global$5[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$5[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var uncurryThis$1 = functionUncurryThis; // `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue

var thisNumberValue$1 = uncurryThis$1(1.0.valueOf);

var wellKnownSymbol$1 = wellKnownSymbol$3;
var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$4 = global$p;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$a;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$3;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object$1 = global$4.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var global$3 = global$p;
var classof = classof$1;
var String$2 = global$3.String;

var toString$1 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$2(argument);
};

var global$2 = global$p;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString = toString$1;
var requireObjectCoercible = requireObjectCoercible$3;
var RangeError$1 = global$2.RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw RangeError$1('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var $$1 = _export;
var global$1 = global$p;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$6;
var RangeError = global$1.RangeError;
var String$1 = global$1.String;
var floor$1 = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var un$ToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;

  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;

  while (--index >= 0) {
    c += data[index];
    data[index] = floor$1(c / n);
    c = c % n * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';

  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String$1(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  }

  return s;
};

var FORCED = fails(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
}); // `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed

$$1({
  target: 'Number',
  proto: true,
  forced: FORCED
}, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;
    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String$1(number);

    if (number < 0) {
      sign = '-';
      number = -number;
    }

    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;

        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }

        multiply(data, pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }

        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }

    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    }

    return result;
  }
});

var $ = _export;
var ceil = Math.ceil;
var floor = Math.floor; // `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc

$({
  target: 'Math',
  stat: true
}, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});

/**
 * The purpose of Effects is to timely alter the state or value of attributes of
 * selected elements of the context, specified on the "selector"
 * property of theirs.
 *
 * The attributes of the elements that the Effect manipulates are
 * always defined on the attrs.animatedAttrs object, passed to it on its constructor.
 * Each key of this object corresponds to an attribute that the Effect will alter and the value
 * of each specifies the final value to go to.
 * On runtime, each Effect is analysed first by element and secondly
 * by animatedAttr.
 * For example an Effect that has the selector ".my-class",
 * that applies in two elements of the context, and has two animatedAttrs
 * will be analysed into four in total "MonoIncidents" (2 elements * 2 animatedAttrs).
 * Each of these produced MonoIncidents refer to a very specific element and
 * to a very specific animated attribute.
 * The Class that you are defining here extends Effect which represents exactly this MonoIncident.
 *
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * - this.initialValue: the initial value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/

var Counter = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(Counter, _MotorCortex$Effect);

  var _super = _createSuper(Counter);

  function Counter() {
    _classCallCheck(this, Counter);

    return _super.apply(this, arguments);
  }

  _createClass(Counter, [{
    key: "getScratchValue",
    value:
    /**
     * the very first MonoIncident of the specific element and the
     * specific attribute that will ever enter a Clip will be asked
     * to provide the initial (the scratch) value of its animatedAttr
     * for its element.
     **/
    function getScratchValue() {
      return 0;
    }
    /**
     * The moment the Effect gets applied as MonoIncident to the specific
     * element and for the specific animatedAttr.
     * You can use this method to initialise anything you need to initialise
     * in order to use it on the onProgress method
     **/

  }, {
    key: "onGetContext",
    value: function onGetContext() {
      this.element.innerHTML = this.initialValue;
    }
    /**
     * Takes two arguments the "fraction" which is a number from 0 to 1, representing
     * the fraction (the percentage) of the duration that we are in,
     * and the millisecond which defines the absolute millisecond.
     * You can use this method to animate your attribute.
     * Remember that you don't need to worry about easings. Easings are already
     * applied before reaching the execution of this method. This method's
     * arguments have already been re-calculated based on the easing.
     **/

  }, {
    key: "onProgress",
    value: function onProgress(fraction) {
      var currentVal = this.initialValue + (this.targetValue - this.initialValue) * fraction;

      if (this.attrs.decimals) {
        currentVal = currentVal.toFixed(this.attrs.decimals);
      } else {
        currentVal = Math.trunc(currentVal);
      }

      this.element.innerHTML = currentVal;
    }
  }]);

  return Counter;
}(MotorCortex.Effect);

var name = "@donkeyclip/motorcortex-counter";
var version = "1.1.1";

var index = {
  npm_name: name,
  // don't touch this
  version: version,
  // don't touch this
  incidents: [{
    exportable: Counter,
    name: "Counter",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          count: {
            type: "number"
          }
        }
      },
      decimals: {
        type: "number",
        optional: true,
        min: 0,
        max: 20,
        integer: true
      }
    }
  }]
};

export { index as default };
