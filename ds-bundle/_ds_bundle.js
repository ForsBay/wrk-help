/* @ds-bundle: {"namespace":"ShiftlyMarketing","components":[{"name":"Comparison","sourcePath":"components/general/Comparison/Comparison.jsx"},{"name":"CtaSection","sourcePath":"components/general/CtaSection/CtaSection.jsx"},{"name":"Features","sourcePath":"components/general/Features/Features.jsx"},{"name":"Footer","sourcePath":"components/general/Footer/Footer.jsx"},{"name":"Hero","sourcePath":"components/general/Hero/Hero.jsx"},{"name":"InteractiveShowcase","sourcePath":"components/general/InteractiveShowcase/InteractiveShowcase.jsx"},{"name":"Nav","sourcePath":"components/general/Nav/Nav.jsx"},{"name":"Platforms","sourcePath":"components/general/Platforms/Platforms.jsx"},{"name":"Stats","sourcePath":"components/general/Stats/Stats.jsx"},{"name":"Testimonials","sourcePath":"components/general/Testimonials/Testimonials.jsx"}],"sourceHashes":{"components/general/Comparison/Comparison.jsx":"03756b59d027","components/general/Comparison/Comparison.d.ts":"36bea566a9a1","components/general/Comparison/Comparison.prompt.md":"3435ed28f730","components/general/CtaSection/CtaSection.jsx":"7e009290e143","components/general/CtaSection/CtaSection.d.ts":"8b61db022237","components/general/CtaSection/CtaSection.prompt.md":"f5d4ad0d40b6","components/general/Features/Features.jsx":"368da1ab5b9a","components/general/Features/Features.d.ts":"add025dba376","components/general/Features/Features.prompt.md":"04c1efba5292","components/general/Footer/Footer.jsx":"36e5341fe0ab","components/general/Footer/Footer.d.ts":"5f466ac9ae66","components/general/Footer/Footer.prompt.md":"28994e037d6d","components/general/Hero/Hero.jsx":"b7763c691a3a","components/general/Hero/Hero.d.ts":"de1260782dde","components/general/Hero/Hero.prompt.md":"5b12df12a504","components/general/InteractiveShowcase/InteractiveShowcase.jsx":"41bba2539103","components/general/InteractiveShowcase/InteractiveShowcase.d.ts":"4f2e60a30bf2","components/general/InteractiveShowcase/InteractiveShowcase.prompt.md":"a88b8222b36c","components/general/Nav/Nav.jsx":"9f35d5852917","components/general/Nav/Nav.d.ts":"96f51fd0bd41","components/general/Nav/Nav.prompt.md":"efaddf022f60","components/general/Platforms/Platforms.jsx":"2d47e661e181","components/general/Platforms/Platforms.d.ts":"edafe257d724","components/general/Platforms/Platforms.prompt.md":"25426b42a146","components/general/Stats/Stats.jsx":"d420bbf08c69","components/general/Stats/Stats.d.ts":"63446bf16ef6","components/general/Stats/Stats.prompt.md":"3868fc0c39ce","components/general/Testimonials/Testimonials.jsx":"10870c27ef72","components/general/Testimonials/Testimonials.d.ts":"ebbd185b08da","components/general/Testimonials/Testimonials.prompt.md":"a5c93e68fb01"},"inlinedExternals":["framer-motion","motion-dom","motion-utils"],"builtBy":"cc-design-sync"} */
"use strict";
var ShiftlyMarketing = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx6(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx6;
      module.exports.jsxs = jsx6;
      module.exports.jsxDEV = jsx6;
      module.exports.Fragment = R.Fragment;
    }
  });

  // shiftly-marketing/components/index.ts
  var index_exports = {};
  __export(index_exports, {
    Comparison: () => Comparison,
    CtaSection: () => CTA,
    Features: () => Features,
    Footer: () => Footer,
    Hero: () => Hero,
    InteractiveShowcase: () => InteractiveShowcase,
    Nav: () => Nav,
    Platforms: () => Platforms,
    Stats: () => Stats,
    Testimonials: () => Testimonials
  });
  init_define_import_meta_env();

  // shiftly-marketing/components/Hero.tsx
  init_define_import_meta_env();
  var import_react26 = __toESM(require_react_shim());

  // shiftly-marketing/node_modules/framer-motion/dist/es/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  init_define_import_meta_env();
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_react10 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  var LayoutGroupContext = (0, import_react.createContext)({});

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-constant.mjs
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  function useConstant(init) {
    const ref = (0, import_react2.useRef)(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
  init_define_import_meta_env();
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var React3 = __toESM(require_react_shim(), 1);
  var import_react6 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim(), 1);
  var PresenceContext = (0, import_react3.createContext)(null);

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var React2 = __toESM(require_react_shim(), 1);
  var import_react5 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);
  var MotionConfigContext = (0, import_react4.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never"
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
  var PopChildMeasure = class extends React2.Component {
    getSnapshotBeforeUpdate(prevProps) {
      const element = this.props.childRef.current;
      if (element && prevProps.isPresent && !this.props.isPresent) {
        const size = this.props.sizeRef.current;
        size.height = element.offsetHeight || 0;
        size.width = element.offsetWidth || 0;
        size.top = element.offsetTop;
        size.left = element.offsetLeft;
      }
      return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  };
  function PopChild({ children, isPresent }) {
    const id3 = (0, import_react5.useId)();
    const ref = (0, import_react5.useRef)(null);
    const size = (0, import_react5.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    const { nonce } = (0, import_react5.useContext)(MotionConfigContext);
    (0, import_react5.useInsertionEffect)(() => {
      const { width, height, top, left } = size.current;
      if (isPresent || !ref.current || !width || !height)
        return;
      ref.current.dataset.motionPopId = id3;
      const style = document.createElement("style");
      if (nonce)
        style.nonce = nonce;
      document.head.appendChild(style);
      if (style.sheet) {
        style.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
      }
      return () => {
        document.head.removeChild(style);
      };
    }, [isPresent]);
    return (0, import_jsx_runtime.jsx)(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: React2.cloneElement(children, { ref }) });
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
  var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id3 = (0, import_react6.useId)();
    const memoizedOnExitComplete = (0, import_react6.useCallback)((childId) => {
      presenceChildren.set(childId, true);
      for (const isComplete of presenceChildren.values()) {
        if (!isComplete)
          return;
      }
      onExitComplete && onExitComplete();
    }, [presenceChildren, onExitComplete]);
    const context = (0, import_react6.useMemo)(
      () => ({
        id: id3,
        initial,
        isPresent,
        custom,
        onExitComplete: memoizedOnExitComplete,
        register: (childId) => {
          presenceChildren.set(childId, false);
          return () => presenceChildren.delete(childId);
        }
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
    );
    (0, import_react6.useMemo)(() => {
      presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    React3.useEffect(() => {
      !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
      children = (0, import_jsx_runtime2.jsx)(PopChild, { isPresent, children });
    }
    return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, { value: context, children });
  };
  function newChildrenMap() {
    return /* @__PURE__ */ new Map();
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim(), 1);
  function usePresence(subscribe = true) {
    const context = (0, import_react7.useContext)(PresenceContext);
    if (context === null)
      return [true, null];
    const { isPresent, onExitComplete, register } = context;
    const id3 = (0, import_react7.useId)();
    (0, import_react7.useEffect)(() => {
      if (subscribe)
        register(id3);
    }, [subscribe]);
    const safeToRemove = (0, import_react7.useCallback)(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
  init_define_import_meta_env();
  var import_react8 = __toESM(require_react_shim(), 1);
  var getChildKey = (child) => child.key || "";
  function onlyElements(children) {
    const filtered = [];
    import_react8.Children.forEach(children, (child) => {
      if ((0, import_react8.isValidElement)(child))
        filtered.push(child);
    });
    return filtered;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  init_define_import_meta_env();
  var import_react9 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/is-browser.mjs
  init_define_import_meta_env();
  var isBrowser = typeof window !== "undefined";

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var useIsomorphicLayoutEffect = isBrowser ? import_react9.useLayoutEffect : import_react9.useEffect;

  // shiftly-marketing/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false }) => {
    const [isParentPresent, safeToRemove] = usePresence(propagate);
    const presentChildren = (0, import_react10.useMemo)(() => onlyElements(children), [children]);
    const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    const isInitialRender = (0, import_react10.useRef)(true);
    const pendingPresentChildren = (0, import_react10.useRef)(presentChildren);
    const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
    const [diffedChildren, setDiffedChildren] = (0, import_react10.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, import_react10.useState)(presentChildren);
    useIsomorphicLayoutEffect(() => {
      isInitialRender.current = false;
      pendingPresentChildren.current = presentChildren;
      for (let i = 0; i < renderedChildren.length; i++) {
        const key = getChildKey(renderedChildren[i]);
        if (!presentKeys.includes(key)) {
          if (exitComplete.get(key) !== true) {
            exitComplete.set(key, false);
          }
        } else {
          exitComplete.delete(key);
        }
      }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
      let nextChildren = [...presentChildren];
      for (let i = 0; i < renderedChildren.length; i++) {
        const child = renderedChildren[i];
        const key = getChildKey(child);
        if (!presentKeys.includes(key)) {
          nextChildren.splice(i, 0, child);
          exitingChildren.push(child);
        }
      }
      if (mode === "wait" && exitingChildren.length) {
        nextChildren = exitingChildren;
      }
      setRenderedChildren(onlyElements(nextChildren));
      setDiffedChildren(presentChildren);
      return;
    }
    if (mode === "wait" && renderedChildren.length > 1) {
      console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    const { forceRender } = (0, import_react10.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: renderedChildren.map((child) => {
      const key = getChildKey(child);
      const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
      const onExit = () => {
        if (exitComplete.has(key)) {
          exitComplete.set(key, true);
        } else {
          return;
        }
        let isEveryExitComplete = true;
        exitComplete.forEach((isExitComplete) => {
          if (!isExitComplete)
            isEveryExitComplete = false;
        });
        if (isEveryExitComplete) {
          forceRender === null || forceRender === void 0 ? void 0 : forceRender();
          setRenderedChildren(pendingPresentChildren.current);
          propagate && (safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove());
          onExitComplete && onExitComplete();
        }
      };
      return (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom: isPresent ? void 0 : custom, presenceAffectsLayout, mode, onExitComplete: isPresent ? void 0 : onExit, children: child }, key);
    }) });
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/frame.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-utils/dist/es/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-utils/dist/es/errors.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-utils/dist/es/noop.mjs
  init_define_import_meta_env();
  var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

  // shiftly-marketing/node_modules/motion-utils/dist/es/errors.mjs
  var warning = noop;
  var invariant = noop;
  if (true) {
    warning = (check, message) => {
      if (!check && typeof console !== "undefined") {
        console.warn(message);
      }
    };
    invariant = (check, message) => {
      if (!check) {
        throw new Error(message);
      }
    };
  }

  // shiftly-marketing/node_modules/motion-utils/dist/es/memo.mjs
  init_define_import_meta_env();
  // @__NO_SIDE_EFFECTS__
  function memo(callback) {
    let result;
    return () => {
      if (result === void 0)
        result = callback();
      return result;
    };
  }

  // shiftly-marketing/node_modules/motion-utils/dist/es/progress.mjs
  init_define_import_meta_env();
  var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  // shiftly-marketing/node_modules/motion-utils/dist/es/time-conversion.mjs
  init_define_import_meta_env();
  var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
  var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/batcher.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
  init_define_import_meta_env();
  var MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/render-step.mjs
  init_define_import_meta_env();
  function createRenderStep(runNextFrame) {
    let thisFrame = /* @__PURE__ */ new Set();
    let nextFrame = /* @__PURE__ */ new Set();
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    let latestFrameData = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    function triggerCallback(callback) {
      if (toKeepAlive.has(callback)) {
        step.schedule(callback);
        runNextFrame();
      }
      callback(latestFrameData);
    }
    const step = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing;
        const queue = addToCurrentFrame ? thisFrame : nextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        if (!queue.has(callback))
          queue.add(callback);
        return callback;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (callback) => {
        nextFrame.delete(callback);
        toKeepAlive.delete(callback);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (frameData2) => {
        latestFrameData = frameData2;
        if (isProcessing) {
          flushNextFrame = true;
          return;
        }
        isProcessing = true;
        [thisFrame, nextFrame] = [nextFrame, thisFrame];
        thisFrame.forEach(triggerCallback);
        thisFrame.clear();
        isProcessing = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData2);
        }
      }
    };
    return step;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/batcher.mjs
  var stepsOrder = [
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ];
  var maxElapsed = 40;
  function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    const flagRunNextFrame = () => runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key) => {
      acc[key] = createRenderStep(flagRunNextFrame);
      return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = () => {
      const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
      runNextFrame = false;
      state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
      state.timestamp = timestamp;
      state.isProcessing = true;
      read.process(state);
      resolveKeyframes.process(state);
      update.process(state);
      preRender.process(state);
      render.process(state);
      postRender.process(state);
      state.isProcessing = false;
      if (runNextFrame && allowKeepAlive) {
        useDefaultElapsed = false;
        scheduleNextBatch(processBatch);
      }
    };
    const wake = () => {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!state.isProcessing) {
        scheduleNextBatch(processBatch);
      }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
      const step = steps[key];
      acc[key] = (process2, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
          wake();
        return step.schedule(process2, keepAlive, immediate);
      };
      return acc;
    }, {});
    const cancel = (process2) => {
      for (let i = 0; i < stepsOrder.length; i++) {
        steps[stepsOrder[i]].cancel(process2);
      }
    };
    return { schedule, cancel, state, steps };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/frame.mjs
  var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/LazyContext.mjs
  init_define_import_meta_env();
  var import_react11 = __toESM(require_react_shim(), 1);
  var LazyContext = (0, import_react11.createContext)({ strict: false });

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
  init_define_import_meta_env();
  var featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  var featureDefinitions = {};
  for (const key in featureProps) {
    featureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
  function loadFeatures(features3) {
    for (const key in features3) {
      featureDefinitions[key] = {
        ...featureDefinitions[key],
        ...features3[key]
      };
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
  init_define_import_meta_env();
  var validMotionProps = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
  ]);
  function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  var shouldForward = (key) => !isValidMotionProp(key);
  function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
      return;
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  }
  try {
    loadExternalIsValidProp(__require("@emotion/is-prop-valid").default);
  } catch (_a) {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
      if (key === "values" && typeof props.values === "object")
        continue;
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
      props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/warn-once.mjs
  init_define_import_meta_env();
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
      return;
    console.warn(message);
    if (element)
      console.warn(element);
    warned.add(message);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
  function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") {
      return componentFactory;
    }
    const componentCache = /* @__PURE__ */ new Map();
    const deprecatedFactoryFunction = (...args) => {
      if (true) {
        warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
      }
      return componentFactory(...args);
    };
    return new Proxy(deprecatedFactoryFunction, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (_target, key) => {
        if (key === "create")
          return componentFactory;
        if (!componentCache.has(key)) {
          componentCache.set(key, componentFactory(key));
        }
        return componentCache.get(key);
      }
    });
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/create-factory.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/index.mjs
  init_define_import_meta_env();
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_react17 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
  init_define_import_meta_env();
  var import_react12 = __toESM(require_react_shim(), 1);
  var MotionContext = (0, import_react12.createContext)({});

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  init_define_import_meta_env();
  var import_react13 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
  init_define_import_meta_env();
  function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
  init_define_import_meta_env();
  function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
  init_define_import_meta_env();
  var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  var variantProps = ["initial", ...variantPriorityOrder];

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
  function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
  }
  function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
  function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
      const { initial, animate } = props;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate) ? animate : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0, import_react13.useContext)(MotionContext));
    return (0, import_react13.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
  init_define_import_meta_env();
  var motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  init_define_import_meta_env();
  var import_react14 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
  init_define_import_meta_env();
  function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  function useMotionRef(visualState, visualElement, externalRef) {
    return (0, import_react14.useCallback)(
      (instance) => {
        if (instance) {
          visualState.onMount && visualState.onMount(instance);
        }
        if (visualElement) {
          if (instance) {
            visualElement.mount(instance);
          } else {
            visualElement.unmount();
          }
        }
        if (externalRef) {
          if (typeof externalRef === "function") {
            externalRef(instance);
          } else if (isRefObject(externalRef)) {
            externalRef.current = instance;
          }
        }
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [visualElement]
    );
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  init_define_import_meta_env();
  var import_react16 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
  init_define_import_meta_env();
  var camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
  var optimizedAppearDataId = "framerAppearId";
  var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/microtask.mjs
  init_define_import_meta_env();
  var { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(queueMicrotask, false);

  // shiftly-marketing/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
  init_define_import_meta_env();
  var import_react15 = __toESM(require_react_shim(), 1);
  var SwitchLayoutGroupContext = (0, import_react15.createContext)({});

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  function useVisualElement(Component3, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    var _a, _b;
    const { visualElement: parent } = (0, import_react16.useContext)(MotionContext);
    const lazyContext = (0, import_react16.useContext)(LazyContext);
    const presenceContext = (0, import_react16.useContext)(PresenceContext);
    const reducedMotionConfig = (0, import_react16.useContext)(MotionConfigContext).reducedMotion;
    const visualElementRef = (0, import_react16.useRef)(null);
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component3, {
        visualState,
        parent,
        props,
        presenceContext,
        blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
        reducedMotionConfig
      });
    }
    const visualElement = visualElementRef.current;
    const initialLayoutGroupConfig = (0, import_react16.useContext)(SwitchLayoutGroupContext);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
      createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = (0, import_react16.useRef)(false);
    (0, import_react16.useInsertionEffect)(() => {
      if (visualElement && isMounted.current) {
        visualElement.update(props, presenceContext);
      }
    });
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = (0, import_react16.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
    useIsomorphicLayoutEffect(() => {
      if (!visualElement)
        return;
      isMounted.current = true;
      window.MotionIsMounted = true;
      visualElement.updateFeatures();
      microtask.render(visualElement.render);
      if (wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
    });
    (0, import_react16.useEffect)(() => {
      if (!visualElement)
        return;
      if (!wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
      if (wantsHandoff.current) {
        queueMicrotask(() => {
          var _a2;
          (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
        });
        wantsHandoff.current = false;
      }
    });
    return visualElement;
  }
  function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
      layoutId,
      layout: layout2,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement,
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof layout2 === "string" ? layout2 : "both",
      initialPromotionConfig,
      layoutScroll,
      layoutRoot
    });
  }
  function getClosestProjectingNode(visualElement) {
    if (!visualElement)
      return void 0;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/index.mjs
  function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component: Component3 }) {
    var _a, _b;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
      let MeasureLayout2;
      const configAndProps = {
        ...(0, import_react17.useContext)(MotionConfigContext),
        ...props,
        layoutId: useLayoutId(props)
      };
      const { isStatic } = configAndProps;
      const context = useCreateMotionContext(props);
      const visualState = useVisualState(props, isStatic);
      if (!isStatic && isBrowser) {
        useStrictMode(configAndProps, preloadedFeatures);
        const layoutProjection = getProjectionFunctionality(configAndProps);
        MeasureLayout2 = layoutProjection.MeasureLayout;
        context.visualElement = useVisualElement(Component3, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
      }
      return (0, import_jsx_runtime4.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime4.jsx)(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component3, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] });
    }
    MotionComponent.displayName = `motion.${typeof Component3 === "string" ? Component3 : `create(${(_b = (_a = Component3.displayName) !== null && _a !== void 0 ? _a : Component3.name) !== null && _b !== void 0 ? _b : ""})`}`;
    const ForwardRefMotionComponent = (0, import_react17.forwardRef)(MotionComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component3;
    return ForwardRefMotionComponent;
  }
  function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, import_react17.useContext)(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, import_react17.useContext)(LazyContext).strict;
    if (preloadedFeatures && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      configAndProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
  }
  function getProjectionFunctionality(props) {
    const { drag: drag2, layout: layout2 } = featureDefinitions;
    if (!drag2 && !layout2)
      return {};
    const combined = { ...drag2, ...layout2 };
    return {
      MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
      ProjectionNode: combined.ProjectionNode
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
  init_define_import_meta_env();
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  function isSVGComponent(Component3) {
    if (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof Component3 !== "string" || /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */
      Component3.includes("-")
    ) {
      return false;
    } else if (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      lowercaseSVGElements.indexOf(Component3) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(Component3)
    ) {
      return true;
    }
    return false;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  init_define_import_meta_env();
  var import_react18 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
  init_define_import_meta_env();
  function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
      state[0][key] = value.get();
      state[1][key] = value.getVelocity();
    });
    return state;
  }
  function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
      definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    return definition;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/resolve-value.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
  init_define_import_meta_env();
  var isKeyframesTarget = (v) => {
    return Array.isArray(v);
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/resolve-value.mjs
  var isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
  };
  var resolveFinalValueInKeyframes = (v) => {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
  init_define_import_meta_env();
  var isMotionValue = (value) => Boolean(value && value.getVelocity);

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
  function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onUpdate }, props, context, presenceContext) {
    const state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
      renderState: createRenderState()
    };
    if (onUpdate) {
      state.onMount = (instance) => onUpdate({ props, current: instance, ...state });
      state.onUpdate = (visualElement) => onUpdate(visualElement);
    }
    return state;
  }
  var makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0, import_react18.useContext)(MotionContext);
    const presenceContext = (0, import_react18.useContext)(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
  };
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
      if (initial === void 0)
        initial = context.initial;
      if (animate === void 0)
        animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      for (let i = 0; i < list.length; i++) {
        const resolved = resolveVariantFromProps(props, list[i]);
        if (resolved) {
          const { transitionEnd, transition, ...target } = resolved;
          for (const key in target) {
            let valueTarget = target[key];
            if (Array.isArray(valueTarget)) {
              const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
              valueTarget = valueTarget[index];
            }
            if (valueTarget !== null) {
              values[key] = valueTarget;
            }
          }
          for (const key in transitionEnd) {
            values[key] = transitionEnd[key];
          }
        }
      }
    }
    return values;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/keys-transform.mjs
  init_define_import_meta_env();
  var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  var transformProps = new Set(transformPropOrder);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
  init_define_import_meta_env();
  var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
  var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
  var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
  var isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
      return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
  };
  var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
  init_define_import_meta_env();
  var getValueAsType = (value, type) => {
    return type && typeof value === "number" ? type.transform(value) : value;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/clamp.mjs
  init_define_import_meta_env();
  var clamp = (min, max, v) => {
    if (v > max)
      return max;
    if (v < min)
      return min;
    return v;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
  var number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  var alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v)
  };
  var scale = {
    ...number,
    default: 1
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
  init_define_import_meta_env();
  var createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  var degrees = /* @__PURE__ */ createUnitType("deg");
  var percent = /* @__PURE__ */ createUnitType("%");
  var px = /* @__PURE__ */ createUnitType("px");
  var vh = /* @__PURE__ */ createUnitType("vh");
  var vw = /* @__PURE__ */ createUnitType("vw");
  var progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100)
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs
  init_define_import_meta_env();
  var browserNumberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs
  init_define_import_meta_env();
  var transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
  init_define_import_meta_env();
  var int = {
    ...number,
    transform: Math.round
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
  var numberValueTypes = {
    ...browserNumberValueTypes,
    ...transformValueTypes,
    zIndex: int,
    size: px,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
  init_define_import_meta_env();
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  var numTransforms = transformPropOrder.length;
  function buildTransform(latestValues, transform2, transformTemplate) {
    let transformString = "";
    let transformIsDefault = true;
    for (let i = 0; i < numTransforms; i++) {
      const key = transformPropOrder[i];
      const value = latestValues[key];
      if (value === void 0)
        continue;
      let valueIsDefault = true;
      if (typeof value === "number") {
        valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
      } else {
        valueIsDefault = parseFloat(value) === 0;
      }
      if (!valueIsDefault || transformTemplate) {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (!valueIsDefault) {
          transformIsDefault = false;
          const transformName = translateAlias[key] || key;
          transformString += `${transformName}(${valueAsType}) `;
        }
        if (transformTemplate) {
          transform2[key] = valueAsType;
        }
      }
    }
    transformString = transformString.trim();
    if (transformTemplate) {
      transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
  function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    let hasTransform2 = false;
    let hasTransformOrigin = false;
    for (const key in latestValues) {
      const value = latestValues[key];
      if (transformProps.has(key)) {
        hasTransform2 = true;
        continue;
      } else if (isCSSVariableName(key)) {
        vars[key] = value;
        continue;
      } else {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (key.startsWith("origin")) {
          hasTransformOrigin = true;
          transformOrigin[key] = valueAsType;
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (!latestValues.transform) {
      if (hasTransform2 || transformTemplate) {
        style.transform = buildTransform(latestValues, state.transform, transformTemplate);
      } else if (style.transform) {
        style.transform = "none";
      }
    }
    if (hasTransformOrigin) {
      const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
      style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
  init_define_import_meta_env();
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    attrs.pathLength = 1;
    const keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = px.transform(-offset);
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
  init_define_import_meta_env();
  function calcOrigin(origin, offset, size) {
    return typeof origin === "string" ? origin : px.transform(offset + size * origin);
  }
  function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
  function buildSVGAttrs(state, {
    attrX,
    attrY,
    attrScale,
    originX,
    originY,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    // This is object creation, which we try to avoid per-frame.
    ...latest
  }, isSVGTag2, transformTemplate) {
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
      if (state.style.viewBox) {
        state.attrs.viewBox = state.style.viewBox;
      }
      return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    if (attrs.transform) {
      if (dimensions)
        style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
      style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (attrScale !== void 0)
      attrs.scale = attrScale;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
  init_define_import_meta_env();
  var createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
  var createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {}
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
  init_define_import_meta_env();
  var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/render.mjs
  init_define_import_meta_env();
  function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    for (const key in vars) {
      element.style.setProperty(key, vars[key]);
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
  init_define_import_meta_env();
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (const key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
  init_define_import_meta_env();
  var scaleCorrectors = {};
  function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
  function isForcedMotionValue(key, { layout: layout2, layoutId }) {
    return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for (const key in style) {
      if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for (const key in props) {
      if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
        const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
  function updateSVGDimensions(instance, renderState) {
    try {
      renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
    } catch (e) {
      renderState.dimensions = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  }
  var layoutProps = ["x", "y", "width", "height", "cx", "cy", "r"];
  var svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
      createRenderState: createSvgRenderState,
      onUpdate: ({ props, prevProps, current, renderState, latestValues }) => {
        if (!current)
          return;
        let hasTransform2 = !!props.drag;
        if (!hasTransform2) {
          for (const key in latestValues) {
            if (transformProps.has(key)) {
              hasTransform2 = true;
              break;
            }
          }
        }
        if (!hasTransform2)
          return;
        let needsMeasure = !prevProps;
        if (prevProps) {
          for (let i = 0; i < layoutProps.length; i++) {
            const key = layoutProps[i];
            if (props[key] !== prevProps[key]) {
              needsMeasure = true;
            }
          }
        }
        if (!needsMeasure)
          return;
        frame.read(() => {
          updateSVGDimensions(current, renderState);
          frame.render(() => {
            buildSVGAttrs(renderState, latestValues, isSVGTag(current.tagName), props.transformTemplate);
            renderSVG(current, renderState);
          });
        });
      }
    })
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/config-motion.mjs
  init_define_import_meta_env();
  var htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createHtmlRenderState
    })
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  init_define_import_meta_env();
  var import_react21 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/use-props.mjs
  init_define_import_meta_env();
  var import_react19 = __toESM(require_react_shim(), 1);
  function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, import_react19.useMemo)(() => {
      const state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, transformTemplate);
      return Object.assign({}, state.vars, state.style);
    }, [visualState]);
  }
  function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
  }
  function useHTMLProps(props, visualState) {
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
      htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  init_define_import_meta_env();
  var import_react20 = __toESM(require_react_shim(), 1);
  function useSVGProps(props, visualState, _isStatic, Component3) {
    const visualProps = (0, import_react20.useMemo)(() => {
      const state = createSvgRenderState();
      buildSVGAttrs(state, visualState, isSVGTag(Component3), props.transformTemplate);
      return {
        ...state.attrs,
        style: { ...state.style }
      };
    }, [visualState]);
    if (props.style) {
      const rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  function createUseRender(forwardMotionProps = false) {
    const useRender = (Component3, props, ref, { latestValues }, isStatic) => {
      const useVisualProps = isSVGComponent(Component3) ? useSVGProps : useHTMLProps;
      const visualProps = useVisualProps(props, latestValues, isStatic, Component3);
      const filteredProps = filterProps(props, typeof Component3 === "string", forwardMotionProps);
      const elementProps = Component3 !== import_react21.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
      const { children } = props;
      const renderedChildren = (0, import_react21.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
      return (0, import_react21.createElement)(Component3, {
        ...elementProps,
        children: renderedChildren
      });
    };
    return useRender;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/create-factory.mjs
  function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent2(Component3, { forwardMotionProps } = { forwardMotionProps: false }) {
      const baseConfig = isSVGComponent(Component3) ? svgMotionConfig : htmlMotionConfig;
      const config = {
        ...baseConfig,
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        Component: Component3
      };
      return createRendererMotionComponent(config);
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/motion/create.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/animations.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
  init_define_import_meta_env();
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (let i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
  init_define_import_meta_env();
  function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/controls/Group.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
  init_define_import_meta_env();
  var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs
  var BaseGroupPlaybackControls = class {
    constructor(animations2) {
      this.stop = () => this.runAll("stop");
      this.animations = animations2.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((animation) => "finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
      return this.animations[0][propName];
    }
    setAll(propName, newValue) {
      for (let i = 0; i < this.animations.length; i++) {
        this.animations[i][propName] = newValue;
      }
    }
    attachTimeline(timeline, fallback) {
      const subscriptions = this.animations.map((animation) => {
        if (supportsScrollTimeline() && animation.attachTimeline) {
          return animation.attachTimeline(timeline);
        } else if (typeof fallback === "function") {
          return fallback(animation);
        }
      });
      return () => {
        subscriptions.forEach((cancel, i) => {
          cancel && cancel();
          this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(time2) {
      this.setAll("time", time2);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(speed) {
      this.setAll("speed", speed);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let max = 0;
      for (let i = 0; i < this.animations.length; i++) {
        max = Math.max(max, this.animations[i].duration);
      }
      return max;
    }
    runAll(methodName) {
      this.animations.forEach((controls) => controls[methodName]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/controls/Group.mjs
  var GroupPlaybackControls = class extends BaseGroupPlaybackControls {
    then(onResolve, onReject) {
      return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
  init_define_import_meta_env();
  function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : void 0;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
  init_define_import_meta_env();
  var maxGeneratorDuration = 2e4;
  function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
      duration += timeStep;
      state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
  init_define_import_meta_env();
  function isGenerator(type) {
    return typeof type === "function";
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs
  init_define_import_meta_env();
  function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs
  init_define_import_meta_env();
  var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
  init_define_import_meta_env();
  var supportsFlags = {
    linearEasing: void 0
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  function memoSupports(callback, supportsFlag) {
    const memoized = memo(callback);
    return () => {
      var _a;
      return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
  var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }, "linearEasing");

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
  init_define_import_meta_env();
  var generateLinearEasing = (easing, duration, resolution = 10) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
      points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs
  function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
  }
  var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
  var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };
  function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
      return void 0;
    } else if (typeof easing === "function" && supportsLinearEasing()) {
      return generateLinearEasing(easing, duration);
    } else if (isBezierDefinition(easing)) {
      return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
      return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
      return supportedWaapiEasing[easing];
    }
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/hover.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
  init_define_import_meta_env();
  var isDragging = {
    x: false,
    y: false
  };
  function isDragActive() {
    return isDragging.x || isDragging.y;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
  init_define_import_meta_env();
  function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
      return [elementOrSelector];
    } else if (typeof elementOrSelector === "string") {
      let root = document;
      if (scope) {
        root = scope.current;
      }
      const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
      return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
  function setupGesture(elementOrSelector, options) {
    const elements = resolveElements(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
      passive: true,
      ...options,
      signal: gestureAbortController.signal
    };
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/hover.mjs
  function filterEvents(callback) {
    return (event) => {
      if (event.pointerType === "touch" || isDragActive())
        return;
      callback(event);
    };
  }
  function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
    const onPointerEnter = filterEvents((enterEvent) => {
      const { target } = enterEvent;
      const onHoverEnd = onHoverStart(enterEvent);
      if (typeof onHoverEnd !== "function" || !target)
        return;
      const onPointerLeave = filterEvents((leaveEvent) => {
        onHoverEnd(leaveEvent);
        target.removeEventListener("pointerleave", onPointerLeave);
      });
      target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    });
    elements.forEach((element) => {
      element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
  init_define_import_meta_env();
  var isNodeOrChild = (parent, child) => {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
  init_define_import_meta_env();
  var isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
      return typeof event.button !== "number" || event.button <= 0;
    } else {
      return event.isPrimary !== false;
    }
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
  init_define_import_meta_env();
  var focusableElements = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
  init_define_import_meta_env();
  var isPressing = /* @__PURE__ */ new WeakSet();

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
  function filterEvents2(callback) {
    return (event) => {
      if (event.key !== "Enter")
        return;
      callback(event);
    };
  }
  function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
  }
  var enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
      return;
    const handleKeydown = filterEvents2(() => {
      if (isPressing.has(element))
        return;
      firePointerEvent(element, "down");
      const handleKeyup = filterEvents2(() => {
        firePointerEvent(element, "up");
      });
      const handleBlur = () => firePointerEvent(element, "cancel");
      element.addEventListener("keyup", handleKeyup, eventOptions);
      element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
  };

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/press/index.mjs
  function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
  }
  function press(elementOrSelector, onPressStart, options = {}) {
    const [elements, eventOptions, cancelEvents] = setupGesture(elementOrSelector, options);
    const startPress = (startEvent) => {
      const element = startEvent.currentTarget;
      if (!isValidPressEvent(startEvent) || isPressing.has(element))
        return;
      isPressing.add(element);
      const onPressEnd = onPressStart(startEvent);
      const onPointerEnd = (endEvent, success) => {
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerCancel);
        if (!isValidPressEvent(endEvent) || !isPressing.has(element)) {
          return;
        }
        isPressing.delete(element);
        if (typeof onPressEnd === "function") {
          onPressEnd(endEvent, { success });
        }
      };
      const onPointerUp = (upEvent) => {
        onPointerEnd(upEvent, options.useGlobalTarget || isNodeOrChild(element, upEvent.target));
      };
      const onPointerCancel = (cancelEvent) => {
        onPointerEnd(cancelEvent, false);
      };
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    elements.forEach((element) => {
      if (!isElementKeyboardAccessible(element) && element.getAttribute("tabindex") === null) {
        element.tabIndex = 0;
      }
      const target = options.useGlobalTarget ? window : element;
      target.addEventListener("pointerdown", startPress, eventOptions);
      element.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions), eventOptions);
    });
    return cancelEvents;
  }

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/start.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/utils/css.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/view/utils/has-target.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
  init_define_import_meta_env();
  function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
      if (isDragging[axis]) {
        return null;
      } else {
        isDragging[axis] = true;
        return () => {
          isDragging[axis] = false;
        };
      }
    } else {
      if (isDragging.x || isDragging.y) {
        return null;
      } else {
        isDragging.x = isDragging.y = true;
        return () => {
          isDragging.x = isDragging.y = false;
        };
      }
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/keys-position.mjs
  init_define_import_meta_env();
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder
  ]);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/setters.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
  init_define_import_meta_env();
  var now;
  function clearTime() {
    now = void 0;
  }
  var time = {
    now: () => {
      if (now === void 0) {
        time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
      }
      return now;
    },
    set: (newTime) => {
      now = newTime;
      queueMicrotask(clearTime);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/array.mjs
  init_define_import_meta_env();
  function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
      arr.push(item);
  }
  function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
      arr.splice(index, 1);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
  var SubscriptionManager = class {
    constructor() {
      this.subscriptions = [];
    }
    add(handler) {
      addUniqueItem(this.subscriptions, handler);
      return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
      const numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (let i = 0; i < numSubscriptions; i++) {
          const handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
  init_define_import_meta_env();
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/index.mjs
  var MAX_VELOCITY_DELTA = 30;
  var isFloat = (value) => {
    return !isNaN(parseFloat(value));
  };
  var collectMotionValues = {
    current: void 0
  };
  var MotionValue = class {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
      this.version = "11.18.2";
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = (v, render = true) => {
        const currentTime = time.now();
        if (this.updatedAt !== currentTime) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(v);
        if (this.current !== this.prev && this.events.change) {
          this.events.change.notify(this.current);
        }
        if (render && this.events.renderRequest) {
          this.events.renderRequest.notify(this.current);
        }
      };
      this.hasAnimated = false;
      this.setCurrent(init);
      this.owner = options.owner;
    }
    setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
      if (this.canTrackVelocity === null && current !== void 0) {
        this.canTrackVelocity = isFloat(this.current);
      }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
      if (true) {
        warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
      }
      return this.on("change", subscription);
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      const unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return () => {
          unsubscribe();
          frame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
    clearListeners() {
      for (const eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
    setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = void 0;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = void 0;
      endAnimation && this.stop();
      if (this.stopPassiveEffect)
        this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      if (collectMotionValues.current) {
        collectMotionValues.current.push(this);
      }
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
      this.stop();
      return new Promise((resolve) => {
        this.hasAnimated = true;
        this.animation = startAnimation(resolve);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  };
  function motionValue(init, options) {
    return new MotionValue(init, options);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/setters.mjs
  function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
      visualElement.getValue(key).set(value);
    } else {
      visualElement.addValue(key, motionValue(value));
    }
  }
  function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
      const value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement, key, value);
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
  init_define_import_meta_env();
  function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
  function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
      return willChange.add(key);
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
  init_define_import_meta_env();
  function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
  init_define_import_meta_env();
  var instantAnimationState = {
    current: false
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/anticipate.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/back.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
  init_define_import_meta_env();
  var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
  init_define_import_meta_env();
  var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
  init_define_import_meta_env();
  var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/back.mjs
  var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
  var backIn = /* @__PURE__ */ reverseEasing(backOut);
  var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/anticipate.mjs
  var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/circ.mjs
  init_define_import_meta_env();
  var circIn = (p) => 1 - Math.sin(Math.acos(p));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circIn);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
  init_define_import_meta_env();
  var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
  function isNone(value) {
    if (typeof value === "number") {
      return value === 0;
    } else if (value !== null) {
      return value === "none" || value === "0" || isZeroValueString(value);
    } else {
      return true;
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/complex/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/hex.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs
  init_define_import_meta_env();
  var sanitize = (v) => Math.round(v * 1e5) / 1e5;

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/utils.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs
  init_define_import_meta_env();
  var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs
  init_define_import_meta_env();
  function isNullish(v) {
    return v == null;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
  init_define_import_meta_env();
  var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/utils.mjs
  var isColorString = (type, testProp) => (v) => {
    return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  var splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
      return v;
    const [a, b, c, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a),
      [bName]: parseFloat(b),
      [cName]: parseFloat(c),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
  var clampRgbUnit = (v) => clamp(0, 255, v);
  var rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v))
  };
  var rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/hex.mjs
  function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
      r = v.substring(1, 3);
      g = v.substring(3, 5);
      b = v.substring(5, 7);
      a = v.substring(7, 9);
    } else {
      r = v.substring(1, 2);
      g = v.substring(2, 3);
      b = v.substring(3, 4);
      a = v.substring(4, 5);
      r += r;
      g += g;
      b += b;
      a += a;
    }
    return {
      red: parseInt(r, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  var hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
  init_define_import_meta_env();
  var hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/color/index.mjs
  var color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs
  init_define_import_meta_env();
  var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/complex/index.mjs
  function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
  }
  var NUMBER_TOKEN = "number";
  var COLOR_TOKEN = "color";
  var VAR_TOKEN = "var";
  var VAR_FUNCTION_TOKEN = "var(";
  var SPLIT_TOKEN = "${}";
  var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
      color: [],
      number: [],
      var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
      if (color.test(parsedValue)) {
        indexes.color.push(i);
        types.push(COLOR_TOKEN);
        values.push(color.parse(parsedValue));
      } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
        indexes.var.push(i);
        types.push(VAR_TOKEN);
        values.push(parsedValue);
      } else {
        indexes.number.push(i);
        types.push(NUMBER_TOKEN);
        values.push(parseFloat(parsedValue));
      }
      ++i;
      return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
  }
  function parseComplexValue(v) {
    return analyseComplexValue(v).values;
  }
  function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
      let output = "";
      for (let i = 0; i < numSections; i++) {
        output += split[i];
        if (v[i] !== void 0) {
          const type = types[i];
          if (type === NUMBER_TOKEN) {
            output += sanitize(v[i]);
          } else if (type === COLOR_TOKEN) {
            output += color.transform(v[i]);
          } else {
            output += v[i];
          }
        }
      }
      return output;
    };
  }
  var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
  function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
  }
  var complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
  init_define_import_meta_env();
  var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
  var filter = {
    ...complex,
    getAnimatableNone: (v) => {
      const functions = v.match(functionRegex);
      return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
  init_define_import_meta_env();
  var defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  };
  var getDefaultValueType = (key) => defaultValueTypes[key];

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
  function getAnimatableNone2(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
      defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
  var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = void 0;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
      const keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
        animatableTemplate = unresolvedKeyframes[i];
      }
      i++;
    }
    if (animatableTemplate && name) {
      for (const noneIndex of noneKeyframeIndexes) {
        unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
      }
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
  init_define_import_meta_env();
  var isNumOrPxType = (v) => v === number || v === px;
  var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
  var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform2 }) => {
    if (transform2 === "none" || !transform2)
      return 0;
    const matrix3d = transform2.match(/^matrix3d\((.+)\)$/u);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      const matrix = transform2.match(/^matrix\((.+)\)$/u);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
  function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
      const value = visualElement.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    return removedTransforms;
  }
  var positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
  };
  positionalValues.translateX = positionalValues.x;
  positionalValues.translateY = positionalValues.y;

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
  var toResolve = /* @__PURE__ */ new Set();
  var isScheduled = false;
  var anyNeedsMeasurement = false;
  function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
      const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
      const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
      const transformsToRestore = /* @__PURE__ */ new Map();
      elementsToMeasure.forEach((element) => {
        const removedTransforms = removeNonTranslationalTransform(element);
        if (!removedTransforms.length)
          return;
        transformsToRestore.set(element, removedTransforms);
        element.render();
      });
      resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
      elementsToMeasure.forEach((element) => {
        element.render();
        const restore = transformsToRestore.get(element);
        if (restore) {
          restore.forEach(([key, value]) => {
            var _a;
            (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
          });
        }
      });
      resolversToMeasure.forEach((resolver) => resolver.measureEndState());
      resolversToMeasure.forEach((resolver) => {
        if (resolver.suspendedScrollY !== void 0) {
          window.scrollTo(0, resolver.suspendedScrollY);
        }
      });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete());
    toResolve.clear();
  }
  function readAllKeyframes() {
    toResolve.forEach((resolver) => {
      resolver.readKeyframes();
      if (resolver.needsMeasurement) {
        anyNeedsMeasurement = true;
      }
    });
  }
  function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
  }
  var KeyframeResolver = class {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
      this.isComplete = false;
      this.isAsync = false;
      this.needsMeasurement = false;
      this.isScheduled = false;
      this.unresolvedKeyframes = [...unresolvedKeyframes];
      this.onComplete = onComplete;
      this.name = name;
      this.motionValue = motionValue2;
      this.element = element;
      this.isAsync = isAsync;
    }
    scheduleResolve() {
      this.isScheduled = true;
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        if (unresolvedKeyframes[i] === null) {
          if (i === 0) {
            const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
            const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== void 0) {
              unresolvedKeyframes[0] = currentValue;
            } else if (element && name) {
              const valueAsRead = element.readValue(name, finalKeyframe);
              if (valueAsRead !== void 0 && valueAsRead !== null) {
                unresolvedKeyframes[0] = valueAsRead;
              }
            }
            if (unresolvedKeyframes[0] === void 0) {
              unresolvedKeyframes[0] = finalKeyframe;
            }
            if (motionValue2 && currentValue === void 0) {
              motionValue2.set(unresolvedKeyframes[0]);
            }
          } else {
            unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
          }
        }
      }
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete() {
      this.isComplete = true;
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
      toResolve.delete(this);
    }
    cancel() {
      if (!this.isComplete) {
        this.isScheduled = false;
        toResolve.delete(this);
      }
    }
    resume() {
      if (!this.isComplete)
        this.scheduleResolve();
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
  init_define_import_meta_env();
  var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
  var splitCSSVariableRegex = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    if (!token)
      return;
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      const trimmed = resolved.trim();
      return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
  init_define_import_meta_env();
  var testValueType = (v) => (type) => type.test(v);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
  init_define_import_meta_env();
  var auto = {
    test: (v) => v === "auto",
    parse: (v) => v
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
  var DOMKeyframesResolver = class extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
      super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes, element, name } = this;
      if (!element || !element.current)
        return;
      super.readKeyframes();
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        let keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string") {
          keyframe = keyframe.trim();
          if (isCSSVariableToken(keyframe)) {
            const resolved = getVariableValue(keyframe, element.current);
            if (resolved !== void 0) {
              unresolvedKeyframes[i] = resolved;
            }
            if (i === unresolvedKeyframes.length - 1) {
              this.finalKeyframe = keyframe;
            }
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return;
      }
      const [origin, target] = unresolvedKeyframes;
      const originType = findDimensionValueType(origin);
      const targetType = findDimensionValueType(target);
      if (originType === targetType)
        return;
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
          const value = unresolvedKeyframes[i];
          if (typeof value === "string") {
            unresolvedKeyframes[i] = parseFloat(value);
          }
        }
      } else {
        this.needsMeasurement = true;
      }
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes, name } = this;
      const noneKeyframeIndexes = [];
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        if (isNone(unresolvedKeyframes[i])) {
          noneKeyframeIndexes.push(i);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
    measureInitialState() {
      const { element, unresolvedKeyframes, name } = this;
      if (!element || !element.current)
        return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== void 0) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
    measureEndState() {
      var _a;
      const { element, name, unresolvedKeyframes } = this;
      if (!element || !element.current)
        return;
      const value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      const finalKeyframeIndex = unresolvedKeyframes.length - 1;
      const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null && this.finalKeyframe === void 0) {
        this.finalKeyframe = finalKeyframe;
      }
      if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
        this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
  init_define_import_meta_env();
  var isAnimatable = (value, name) => {
    if (name === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
  function hasKeyframesChanged(keyframes2) {
    const current = keyframes2[0];
    if (keyframes2.length === 1)
      return true;
    for (let i = 0; i < keyframes2.length; i++) {
      if (keyframes2[i] !== current)
        return true;
    }
  }
  function canAnimate(keyframes2, name, type, velocity) {
    const originKeyframe = keyframes2[0];
    if (originKeyframe === null)
      return false;
    if (name === "display" || name === "visibility")
      return true;
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    if (!isOriginAnimatable || !isTargetAnimatable) {
      return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
  init_define_import_meta_env();
  var isNotNull = (value) => value !== null;
  function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes2.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
  var MAX_RESOLVE_DELAY = 40;
  var BaseAnimation = class {
    constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
      this.isStopped = false;
      this.hasAttemptedResolve = false;
      this.createdAt = time.now();
      this.options = {
        autoplay,
        delay: delay2,
        type,
        repeat,
        repeatDelay,
        repeatType,
        ...options
      };
      this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime() {
      if (!this.resolvedAt)
        return this.createdAt;
      return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
      if (!this._resolved && !this.hasAttemptedResolve) {
        flushKeyframeResolvers();
      }
      return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(keyframes2, finalKeyframe) {
      this.resolvedAt = time.now();
      this.hasAttemptedResolve = true;
      const { name, type, velocity, delay: delay2, onComplete, onUpdate, isGenerator: isGenerator2 } = this.options;
      if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
        if (instantAnimationState.current || !delay2) {
          onUpdate && onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
          onComplete && onComplete();
          this.resolveFinishedPromise();
          return;
        } else {
          this.options.duration = 0;
        }
      }
      const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
      if (resolvedAnimation === false)
        return;
      this._resolved = {
        keyframes: keyframes2,
        finalKeyframe,
        ...resolvedAnimation
      };
      this.onPostResolved();
    }
    onPostResolved() {
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
      return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
      this.options.type = "keyframes";
      this.options.ease = "linear";
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((resolve) => {
        this.resolveFinishedPromise = resolve;
      });
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/complex.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/number.mjs
  init_define_import_meta_env();
  var mixNumber = (from, to, progress2) => {
    return from + (to - from) * progress2;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/color.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
  init_define_import_meta_env();
  function hueToRgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/immediate.mjs
  init_define_import_meta_env();
  function mixImmediate(a, b) {
    return (p) => p > 0 ? b : a;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/color.mjs
  var mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v) => colorTypes.find((type) => type.test(v));
  function asRGBA(color2) {
    const type = getColorType(color2);
    warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
      return false;
    let model = type.parse(color2);
    if (type === hsla) {
      model = hslaToRgba(model);
    }
    return model;
  }
  var mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
      return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
      blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
      blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
      blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
      blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
      return rgba.transform(blended);
    };
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/pipe.mjs
  init_define_import_meta_env();
  var combineFunctions = (a, b) => (v) => b(a(v));
  var pipe = (...transformers) => transformers.reduce(combineFunctions);

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/visibility.mjs
  init_define_import_meta_env();
  var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
  function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
      return (p) => p <= 0 ? origin : target;
    } else {
      return (p) => p >= 1 ? target : origin;
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/complex.mjs
  function mixNumber2(a, b) {
    return (p) => mixNumber(a, b, p);
  }
  function getMixer(a) {
    if (typeof a === "number") {
      return mixNumber2;
    } else if (typeof a === "string") {
      return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
      return mixArray;
    } else if (typeof a === "object") {
      return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
  }
  function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
      for (let i = 0; i < numValues; i++) {
        output[i] = blendValue[i](p);
      }
      return output;
    };
  }
  function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
      if (a[key] !== void 0 && b[key] !== void 0) {
        blendValue[key] = getMixer(a[key])(a[key], b[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  }
  function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
      const type = target.types[i];
      const originIndex = origin.indexes[type][pointers[type]];
      const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
      orderedOrigin[i] = originValue;
      pointers[type]++;
    }
    return orderedOrigin;
  }
  var mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
      if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
        return mixVisibility(origin, target);
      }
      return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return mixImmediate(origin, target);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/mix/index.mjs
  function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
      return mixNumber(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
  init_define_import_meta_env();
  var velocitySampleDuration = 5;
  function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/spring/defaults.mjs
  init_define_import_meta_env();
  var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
  init_define_import_meta_env();
  var safeMin = 1e-3;
  function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = calcAngularFreq(undampedFreq2, dampingRatio);
        const c = Math.exp(-delta);
        return safeMin - a / b * c;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a * b;
      };
      derivative = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (velocity - undampedFreq2) * (duration * duration);
        return a * b;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
      return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== void 0);
  }
  function getSpringOptions(options) {
    let springOptions = {
      velocity: springDefaults.velocity,
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      mass: springDefaults.mass,
      isResolvedFromDuration: false,
      ...options
    };
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      if (options.visualDuration) {
        const visualDuration = options.visualDuration;
        const root = 2 * Math.PI / (visualDuration * 1.2);
        const stiffness = root * root;
        const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
        springOptions = {
          ...springOptions,
          mass: springDefaults.mass,
          stiffness,
          damping
        };
      } else {
        const derived = findSpring(options);
        springOptions = {
          ...springOptions,
          ...derived,
          mass: springDefaults.mass
        };
        springOptions.isResolvedFromDuration = true;
      }
    }
    return springOptions;
  }
  function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
      visualDuration: optionsOrVisualDuration,
      keyframes: [0, 1],
      bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
      ...options,
      velocity: -millisecondsToSeconds(options.velocity || 0)
    });
    const initialVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
    const generator = {
      calculatedDuration: isResolvedFromDuration ? duration || null : null,
      next: (t) => {
        const current = resolveSpring(t);
        if (!isResolvedFromDuration) {
          let currentVelocity = 0;
          if (dampingRatio < 1) {
            currentVelocity = t === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
          }
          const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t >= duration;
        }
        state.value = state.done ? target : current;
        return state;
      },
      toString: () => {
        const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
        const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
        return calculatedDuration + "ms " + easing;
      }
    };
    return generator;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
  function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes2[0];
    const state = {
      done: false,
      value: origin
    };
    const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
    const nearestBoundary = (v) => {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
      const delta = calcDelta(t);
      const latest = calcLatest(t);
      state.done = Math.abs(delta) <= restDelta;
      state.value = state.done ? target : latest;
    };
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
      if (!isOutOfBounds(state.value))
        return;
      timeReachedBoundary = t;
      spring$1 = spring({
        keyframes: [state.value, nearestBoundary(state.value)],
        velocity: calcGeneratorVelocity(calcLatest, t, state.value),
        // TODO: This should be passing * 1000
        damping: bounceDamping,
        stiffness: bounceStiffness,
        restDelta,
        restSpeed
      });
    };
    checkCatchBoundary(0);
    return {
      calculatedDuration: null,
      next: (t) => {
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === void 0) {
          hasUpdatedFrame = true;
          applyFriction(t);
          checkCatchBoundary(t);
        }
        if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
          return spring$1.next(t - timeReachedBoundary);
        } else {
          !hasUpdatedFrame && applyFriction(t);
          return state;
        }
      }
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/ease.mjs
  init_define_import_meta_env();
  var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
  var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
  var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
  init_define_import_meta_env();
  var isEasingArray = (ease3) => {
    return Array.isArray(ease3) && typeof ease3[0] !== "number";
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/easing/utils/map.mjs
  init_define_import_meta_env();
  var easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  };
  var easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
      invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
      const [x1, y1, x2, y2] = definition;
      return cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
      invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
      return easingLookup[definition];
    }
    return definition;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/interpolate.mjs
  init_define_import_meta_env();
  function createMixers(output, ease3, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
      let mixer = mixerFactory(output[i], output[i + 1]);
      if (ease3) {
        const easingFunction = Array.isArray(ease3) ? ease3[i] || noop : ease3;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function interpolate(input, output, { clamp: isClamp = true, ease: ease3, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    if (inputLength === 1)
      return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
      return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    if (input[0] > input[inputLength - 1]) {
      input = [...input].reverse();
      output = [...output].reverse();
    }
    const mixers = createMixers(output, ease3, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
      if (isZeroDeltaRange && v < input[0])
        return output[0];
      let i = 0;
      if (numMixers > 1) {
        for (; i < input.length - 2; i++) {
          if (v < input[i + 1])
            break;
        }
      }
      const progressInRange = progress(input[i], input[i + 1], v);
      return mixers[i](progressInRange);
    };
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/offsets/default.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
  init_define_import_meta_env();
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
      const offsetProgress = progress(0, remaining, i);
      offset.push(mixNumber(min, 1, offsetProgress));
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/offsets/default.mjs
  function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/offsets/time.mjs
  init_define_import_meta_env();
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease3 = "easeInOut" }) {
    const easingFunctions = isEasingArray(ease3) ? ease3.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease3);
    const state = {
      done: false,
      value: keyframeValues[0]
    };
    const absoluteTimes = convertOffsetToTimes(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
      duration
    );
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = mapTimeToKeyframe(t);
        state.done = t >= duration;
        return state;
      }
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
  init_define_import_meta_env();
  var frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
      start: () => frame.update(passTimestamp, true),
      stop: () => cancelFrame(passTimestamp),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => frameData.isProcessing ? frameData.timestamp : time.now()
    };
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
  var generators = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
  };
  var percentToProgress = (percent2) => percent2 / 100;
  var MainThreadAnimation = class extends BaseAnimation {
    constructor(options) {
      super(options);
      this.holdTime = null;
      this.cancelTime = null;
      this.currentTime = 0;
      this.playbackSpeed = 1;
      this.pendingPlayState = "running";
      this.startTime = null;
      this.state = "idle";
      this.stop = () => {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle")
          return;
        this.teardown();
        const { onStop } = this.options;
        onStop && onStop();
      };
      const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
      const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
      const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
      this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
      this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten();
      if (this._resolved) {
        Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
      }
    }
    initPlayback(keyframes$1) {
      const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
      const generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
      let mapPercentToKeyframes;
      let mirroredGenerator;
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        if (true) {
          invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
        }
        mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
      if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory({
          ...this.options,
          keyframes: [...keyframes$1].reverse(),
          velocity: -velocity
        });
      }
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      const { calculatedDuration } = generator;
      const resolvedDuration = calculatedDuration + repeatDelay;
      const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
      return {
        generator,
        mirroredGenerator,
        mapPercentToKeyframes,
        calculatedDuration,
        resolvedDuration,
        totalDuration
      };
    }
    onPostResolved() {
      const { autoplay = true } = this.options;
      this.play();
      if (this.pendingPlayState === "paused" || !autoplay) {
        this.pause();
      } else {
        this.state = this.pendingPlayState;
      }
    }
    tick(timestamp, sample = false) {
      const { resolved } = this;
      if (!resolved) {
        const { keyframes: keyframes3 } = this.options;
        return { done: true, value: keyframes3[keyframes3.length - 1] };
      }
      const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes: keyframes2, calculatedDuration, totalDuration, resolvedDuration } = resolved;
      if (this.startTime === null)
        return generator.next(0);
      const { delay: delay2, repeat, repeatType, repeatDelay, onUpdate } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      if (sample) {
        this.currentTime = timestamp;
      } else if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
      }
      const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
      const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      let elapsed = this.currentTime;
      let frameGenerator = generator;
      if (repeat) {
        const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        const isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      const state = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
      if (mapPercentToKeyframes) {
        state.value = mapPercentToKeyframes(state.value);
      }
      let { done } = state;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && finalKeyframe !== void 0) {
        state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
    get duration() {
      const { resolved } = this;
      return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
    }
    get time() {
      return millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.holdTime !== null || this.speed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.speed;
      }
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(newSpeed) {
      const hasChanged = this.playbackSpeed !== newSpeed;
      this.playbackSpeed = newSpeed;
      if (hasChanged) {
        this.time = millisecondsToSeconds(this.currentTime);
      }
    }
    play() {
      if (!this.resolver.isScheduled) {
        this.resolver.resume();
      }
      if (!this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped)
        return;
      const { driver = frameloopDriver, onPlay, startTime } = this.options;
      if (!this.driver) {
        this.driver = driver((timestamp) => this.tick(timestamp));
      }
      onPlay && onPlay();
      const now2 = this.driver.now();
      if (this.holdTime !== null) {
        this.startTime = now2 - this.holdTime;
      } else if (!this.startTime) {
        this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
      } else if (this.state === "finished") {
        this.startTime = now2;
      }
      if (this.state === "finished") {
        this.updateFinishedPromise();
      }
      this.cancelTime = this.startTime;
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      var _a;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused";
      this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.pendingPlayState = this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      this.teardown();
      this.state = "finished";
      const { onComplete } = this.options;
      onComplete && onComplete();
    }
    cancel() {
      if (this.cancelTime !== null) {
        this.tick(this.cancelTime);
      }
      this.teardown();
      this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.resolveFinishedPromise();
      this.updateFinishedPromise();
      this.startTime = this.cancelTime = null;
      this.resolver.cancel();
    }
    stopDriver() {
      if (!this.driver)
        return;
      this.driver.stop();
      this.driver = void 0;
    }
    sample(time2) {
      this.startTime = 0;
      return this.tick(time2, true);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs
  init_define_import_meta_env();
  var acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]);

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
  init_define_import_meta_env();
  function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease3 = "easeInOut", times } = {}) {
    const keyframeOptions = { [valueName]: keyframes2 };
    if (times)
      keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease3, duration);
    if (Array.isArray(easing))
      keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
      delay: delay2,
      duration,
      easing: !Array.isArray(easing) ? easing : "linear",
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal"
    });
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
  init_define_import_meta_env();
  var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
  var sampleDelta = 10;
  var maxDuration = 2e4;
  function requiresPregeneratedKeyframes(options) {
    return isGenerator(options.type) || options.type === "spring" || !isWaapiSupportedEasing(options.ease);
  }
  function pregenerateKeyframes(keyframes2, options) {
    const sampleAnimation = new MainThreadAnimation({
      ...options,
      keyframes: keyframes2,
      repeat: 0,
      delay: 0,
      isGenerator: true
    });
    let state = { done: false, value: keyframes2[0] };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < maxDuration) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    return {
      times: void 0,
      keyframes: pregeneratedKeyframes,
      duration: t - sampleDelta,
      ease: "linear"
    };
  }
  var unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut
  };
  function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
  }
  var AcceleratedAnimation = class extends BaseAnimation {
    constructor(options) {
      super(options);
      const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
      this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
      this.resolver.scheduleResolve();
    }
    initPlayback(keyframes2, finalKeyframe) {
      let { duration = 300, times, ease: ease3, type, motionValue: motionValue2, name, startTime } = this.options;
      if (!motionValue2.owner || !motionValue2.owner.current) {
        return false;
      }
      if (typeof ease3 === "string" && supportsLinearEasing() && isUnsupportedEase(ease3)) {
        ease3 = unsupportedEasingFunctions[ease3];
      }
      if (requiresPregeneratedKeyframes(this.options)) {
        const { onComplete, onUpdate, motionValue: motionValue3, element, ...options } = this.options;
        const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
        keyframes2 = pregeneratedAnimation.keyframes;
        if (keyframes2.length === 1) {
          keyframes2[1] = keyframes2[0];
        }
        duration = pregeneratedAnimation.duration;
        times = pregeneratedAnimation.times;
        ease3 = pregeneratedAnimation.ease;
        type = "keyframes";
      }
      const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, { ...this.options, duration, times, ease: ease3 });
      animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
      if (this.pendingTimeline) {
        attachTimeline(animation, this.pendingTimeline);
        this.pendingTimeline = void 0;
      } else {
        animation.onfinish = () => {
          const { onComplete } = this.options;
          motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
          onComplete && onComplete();
          this.cancel();
          this.resolveFinishedPromise();
        };
      }
      return {
        animation,
        duration,
        times,
        type,
        ease: ease3,
        keyframes: keyframes2
      };
    }
    get duration() {
      const { resolved } = this;
      if (!resolved)
        return 0;
      const { duration } = resolved;
      return millisecondsToSeconds(duration);
    }
    get time() {
      const { resolved } = this;
      if (!resolved)
        return 0;
      const { animation } = resolved;
      return millisecondsToSeconds(animation.currentTime || 0);
    }
    set time(newTime) {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.currentTime = secondsToMilliseconds(newTime);
    }
    get speed() {
      const { resolved } = this;
      if (!resolved)
        return 1;
      const { animation } = resolved;
      return animation.playbackRate;
    }
    set speed(newSpeed) {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.playbackRate = newSpeed;
    }
    get state() {
      const { resolved } = this;
      if (!resolved)
        return "idle";
      const { animation } = resolved;
      return animation.playState;
    }
    get startTime() {
      const { resolved } = this;
      if (!resolved)
        return null;
      const { animation } = resolved;
      return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline) {
      if (!this._resolved) {
        this.pendingTimeline = timeline;
      } else {
        const { resolved } = this;
        if (!resolved)
          return noop;
        const { animation } = resolved;
        attachTimeline(animation, timeline);
      }
      return noop;
    }
    play() {
      if (this.isStopped)
        return;
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      if (animation.playState === "finished") {
        this.updateFinishedPromise();
      }
      animation.play();
    }
    pause() {
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation } = resolved;
      animation.pause();
    }
    stop() {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.resolveFinishedPromise();
      this.updateFinishedPromise();
      const { resolved } = this;
      if (!resolved)
        return;
      const { animation, keyframes: keyframes2, duration, type, ease: ease3, times } = resolved;
      if (animation.playState === "idle" || animation.playState === "finished") {
        return;
      }
      if (this.time) {
        const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
        const sampleAnimation = new MainThreadAnimation({
          ...options,
          keyframes: keyframes2,
          duration,
          type,
          ease: ease3,
          times,
          isGenerator: true
        });
        const sampleTime = secondsToMilliseconds(this.time);
        motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
      }
      const { onStop } = this.options;
      onStop && onStop();
      this.cancel();
    }
    complete() {
      const { resolved } = this;
      if (!resolved)
        return;
      resolved.animation.finish();
    }
    cancel() {
      const { resolved } = this;
      if (!resolved)
        return;
      resolved.animation.cancel();
    }
    static supports(options) {
      const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options;
      if (!motionValue2 || !motionValue2.owner || !(motionValue2.owner.current instanceof HTMLElement)) {
        return false;
      }
      const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
      return supportsWaapi() && name && acceleratedValues.has(name) && /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
  init_define_import_meta_env();
  var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  var criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
  };
  var ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
    if (keyframes2.length > 2) {
      return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
      return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
  init_define_import_meta_env();
  function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
  var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    let options = {
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity(),
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name,
      motionValue: value,
      element: isHandoff ? void 0 : element
    };
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(name, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (options.from !== void 0) {
      options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false || options.duration === 0 && !options.repeatDelay) {
      options.duration = 0;
      if (options.delay === 0) {
        shouldSkip = true;
      }
    }
    if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
      shouldSkip = true;
      options.duration = 0;
      options.delay = 0;
    }
    if (shouldSkip && !isHandoff && value.get() !== void 0) {
      const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
      if (finalKeyframe !== void 0) {
        frame.update(() => {
          options.onUpdate(finalKeyframe);
          options.onComplete();
        });
        return new GroupPlaybackControls([]);
      }
    }
    if (!isHandoff && AcceleratedAnimation.supports(options)) {
      return new AcceleratedAnimation(options);
    } else {
      return new MainThreadAnimation(options);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
  function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
      transition = transitionOverride;
    const animations2 = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for (const key in target) {
      const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
      const valueTarget = target[key];
      if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      const valueTransition = {
        delay: delay2,
        ...getValueTransition(transition || {}, key)
      };
      let isHandoff = false;
      if (window.MotionHandoffAnimation) {
        const appearId = getOptimisedAppearId(visualElement);
        if (appearId) {
          const startTime = window.MotionHandoffAnimation(appearId, key, frame);
          if (startTime !== null) {
            valueTransition.startTime = startTime;
            isHandoff = true;
          }
        }
      }
      addValueToWillChange(visualElement, key);
      value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
      const animation = value.animation;
      if (animation) {
        animations2.push(animation);
      }
    }
    if (transitionEnd) {
      Promise.all(animations2).then(() => {
        frame.update(() => {
          transitionEnd && setTarget(visualElement, transitionEnd);
        });
      });
    }
    return animations2;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
  init_define_import_meta_env();
  function animateVariant(visualElement, variant, options = {}) {
    var _a;
    const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
      const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
      return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : () => Promise.resolve();
    const { when } = transition;
    if (when) {
      const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
      return first().then(() => last());
    } else {
      return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
  }
  function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations2 = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delayChildren + generateStaggerDuration(i)
      }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations2);
  }
  function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
  function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
      const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement, definition, options);
    } else {
      const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
      animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
      visualElement.notify("AnimationComplete", definition);
    });
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
  init_define_import_meta_env();
  var numVariantProps = variantProps.length;
  function getVariantContext(visualElement) {
    if (!visualElement)
      return void 0;
    if (!visualElement.isControllingVariants) {
      const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
      if (visualElement.props.initial !== void 0) {
        context2.initial = visualElement.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = visualElement.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
  var reversePriorityOrder = [...variantPriorityOrder].reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement) {
    return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
  }
  function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    let state = createState();
    let isInitialRender = true;
    const buildResolvedTypeValues = (type) => (acc, definition) => {
      var _a;
      const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
      if (resolved) {
        const { transition, transitionEnd, ...target } = resolved;
        acc = { ...acc, ...target, ...transitionEnd };
      }
      return acc;
    };
    function setAnimateFunction(makeAnimator) {
      animate = makeAnimator(visualElement);
    }
    function animateChanges(changedActiveType) {
      const { props } = visualElement;
      const context = getVariantContext(visualElement.parent) || {};
      const animations2 = [];
      const removedKeys = /* @__PURE__ */ new Set();
      let encounteredKeys = {};
      let removedVariantIndex = Infinity;
      for (let i = 0; i < numAnimationTypes; i++) {
        const type = reversePriorityOrder[i];
        const typeState = state[type];
        const prop = props[type] !== void 0 ? props[type] : context[type];
        const propIsVariant = isVariantLabel(prop);
        const activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i;
        let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = { ...encounteredKeys };
        if (
          // If it isn't active and hasn't *just* been set as inactive
          !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
          !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
          isAnimationControls(prop) || typeof prop === "boolean"
        ) {
          continue;
        }
        const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
        type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
        i > removedVariantIndex && propIsVariant;
        let handledRemovedValues = false;
        const definitionList = Array.isArray(prop) ? prop : [prop];
        let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
        if (activeDelta === false)
          resolvedValues = {};
        const { prevResolvedValues = {} } = typeState;
        const allKeys = {
          ...prevResolvedValues,
          ...resolvedValues
        };
        const markToAnimate = (key) => {
          shouldAnimateType = true;
          if (removedKeys.has(key)) {
            handledRemovedValues = true;
            removedKeys.delete(key);
          }
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        };
        for (const key in allKeys) {
          const next = resolvedValues[key];
          const prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          let valueHasChanged = false;
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            valueHasChanged = !shallowCompare(next, prev);
          } else {
            valueHasChanged = next !== prev;
          }
          if (valueHasChanged) {
            if (next !== void 0 && next !== null) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = { ...encounteredKeys, ...resolvedValues };
        }
        if (isInitialRender && visualElement.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        const willAnimateViaParent = isInherited && variantDidChange;
        const needsAnimating = !willAnimateViaParent || handledRemovedValues;
        if (shouldAnimateType && needsAnimating) {
          animations2.push(...definitionList.map((animation) => ({
            animation,
            options: { type }
          })));
        }
      }
      if (removedKeys.size) {
        const fallbackAnimation = {};
        removedKeys.forEach((key) => {
          const fallbackTarget = visualElement.getBaseTarget(key);
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = true;
          fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
        });
        animations2.push({ animation: fallbackAnimation });
      }
      let shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      return shouldAnimate ? animate(animations2) : Promise.resolve();
    }
    function setActive(type, isActive) {
      var _a;
      if (state[type].isActive === isActive)
        return Promise.resolve();
      (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
        var _a2;
        return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
      });
      state[type].isActive = isActive;
      const animations2 = animateChanges(type);
      for (const key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: () => state,
      reset: () => {
        state = createState();
        isInitialRender = true;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (Array.isArray(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive = false) {
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    return {
      animate: createTypeState(true),
      whileInView: createTypeState(),
      whileHover: createTypeState(),
      whileTap: createTypeState(),
      whileDrag: createTypeState(),
      whileFocus: createTypeState(),
      exit: createTypeState()
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/Feature.mjs
  init_define_import_meta_env();
  var Feature = class {
    constructor(node) {
      this.isMounted = false;
      this.node = node;
    }
    update() {
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
  var AnimationFeature = class extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
      super(node);
      node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
      const { animate } = this.node.getProps();
      if (isAnimationControls(animate)) {
        this.unmountControls = animate.subscribe(this.node);
      }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate } = this.node.getProps();
      const { animate: prevAnimate } = this.node.prevProps || {};
      if (animate !== prevAnimate) {
        this.updateAnimationControlsSubscription();
      }
    }
    unmount() {
      var _a;
      this.node.animationState.reset();
      (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
  init_define_import_meta_env();
  var id = 0;
  var ExitAnimationFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.id = id++;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent, onExitComplete } = this.node.presenceContext;
      const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || isPresent === prevIsPresent) {
        return;
      }
      const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
      if (onExitComplete && !isPresent) {
        exitAnimation.then(() => onExitComplete(this.id));
      }
    }
    mount() {
      const { register } = this.node.presenceContext || {};
      if (register) {
        this.unmount = register(this.id);
      }
    }
    unmount() {
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/animations.mjs
  var animations = {
    animation: {
      Feature: AnimationFeature
    },
    exit: {
      Feature: ExitAnimationFeature
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/drag.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/events/add-dom-event.mjs
  init_define_import_meta_env();
  function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/events/event-info.mjs
  init_define_import_meta_env();
  function extractEventInfo(event) {
    return {
      point: {
        x: event.pageX,
        y: event.pageY
      }
    };
  }
  var addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/distance.mjs
  init_define_import_meta_env();
  var distance = (a, b) => Math.abs(a - b);
  function distance2D(a, b) {
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
  var PanSession = class {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
        const isPanStarted = this.startEvent !== null;
        const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        const { point: point2 } = info2;
        const { timestamp: timestamp2 } = frameData;
        this.history.push({ ...point2, timestamp: timestamp2 });
        const { onStart, onMove } = this.handlers;
        if (!isPanStarted) {
          onStart && onStart(this.lastMoveEvent, info2);
          this.startEvent = this.lastMoveEvent;
        }
        onMove && onMove(this.lastMoveEvent, info2);
      };
      this.handlePointerMove = (event2, info2) => {
        this.lastMoveEvent = event2;
        this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
        frame.update(this.updatePoint, true);
      };
      this.handlePointerUp = (event2, info2) => {
        this.end();
        const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
        if (this.dragSnapToOrigin)
          resumeAnimation && resumeAnimation();
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
        if (this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (!isPrimaryPointer(event))
        return;
      this.dragSnapToOrigin = dragSnapToOrigin;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      this.contextWindow = contextWindow || window;
      const info = extractEventInfo(event);
      const initialInfo = transformPoint(info, this.transformPagePoint);
      const { point } = initialInfo;
      const { timestamp } = frameData;
      this.history = [{ ...point, timestamp }];
      const { onSessionStart } = handlers;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
      this.handlers = handlers;
    }
    end() {
      this.removeListeners && this.removeListeners();
      cancelFrame(this.updatePoint);
    }
  };
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo({ point }, history) {
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time2 === 0) {
      return { x: 0, y: 0 };
    }
    const currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time2,
      y: (lastPoint.y - timestampedPoint.y) / time2
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
  init_define_import_meta_env();
  var SCALE_PRECISION = 1e-4;
  var SCALE_MIN = 1 - SCALE_PRECISION;
  var SCALE_MAX = 1 + SCALE_PRECISION;
  var TRANSLATE_PRECISION = 0.01;
  var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
  var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mixNumber(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
      delta.scale = 1;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
      delta.translate = 0;
    }
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
  }
  function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
  }
  function calcRelativeAxisPosition(target, layout2, parent) {
    target.min = layout2.min - parent.min;
    target.max = target.min + calcLength(layout2);
  }
  function calcRelativePosition(target, layout2, parent) {
    calcRelativeAxisPosition(target.x, layout2.x, parent.x);
    calcRelativeAxisPosition(target.y, layout2.y, parent.y);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
  function applyConstraints(point, { min, max }, elastic) {
    if (min !== void 0 && point < min) {
      point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      [min, max] = [max, min];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin2(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout2, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout2.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout2.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/models.mjs
  init_define_import_meta_env();
  var createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  var createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta()
  });
  var createAxis = () => ({ min: 0, max: 0 });
  var createBox = () => ({
    x: createAxis(),
    y: createAxis()
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
  init_define_import_meta_env();
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
  init_define_import_meta_env();
  function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2)
      return point;
    const topLeft = transformPoint2({ x: point.left, y: point.top });
    const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
  init_define_import_meta_env();
  function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
  }
  function hasScale({ scale: scale2, scaleX, scaleY }) {
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
  }
  function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
  }
  function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
  }
  function is2DTranslate(value) {
    return value && value !== "0%";
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
  function scalePoint(point, scale2, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  var TREE_SCALE_SNAP_MIN = 0.999999999999;
  var TREE_SCALE_SNAP_MAX = 1.0000000000001;
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta = node.projectionDelta;
      const { visualElement } = node.options;
      if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
        continue;
      }
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        transformBox(box, {
          x: -node.scroll.offset.x,
          y: -node.scroll.offset.y
        });
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues);
      }
    }
    if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
      treeScale.x = 1;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
      treeScale.y = 1;
    }
  }
  function translateAxis(axis, distance2) {
    axis.min = axis.min + distance2;
    axis.max = axis.max + distance2;
  }
  function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
  }
  function transformBox(box, transform2) {
    transformAxis(box.x, transform2.x, transform2.scaleX, transform2.scale, transform2.originX);
    transformAxis(box.y, transform2.y, transform2.scaleY, transform2.scale, transform2.originY);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode2;
    if (scroll) {
      translateAxis(viewportBox.x, scroll.offset.x);
      translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
  init_define_import_meta_env();
  var getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  var elementDragControls = /* @__PURE__ */ new WeakMap();
  var VisualElementDragControls = class {
    constructor(visualElement) {
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = { x: 0, y: 0 };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = createBox();
      this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
      const { presenceContext } = this.visualElement;
      if (presenceContext && presenceContext.isPresent === false)
        return;
      const onSessionStart = (event) => {
        const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
        dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
        if (snapToCursor) {
          this.snapToCursor(extractEventInfo(event).point);
        }
      };
      const onStart = (event, info) => {
        const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
        if (drag2 && !dragPropagation) {
          if (this.openDragLock)
            this.openDragLock();
          this.openDragLock = setDragLock(drag2);
          if (!this.openDragLock)
            return;
        }
        this.isDragging = true;
        this.currentDirection = null;
        this.resolveConstraints();
        if (this.visualElement.projection) {
          this.visualElement.projection.isAnimationBlocked = true;
          this.visualElement.projection.target = void 0;
        }
        eachAxis((axis) => {
          let current = this.getAxisMotionValue(axis).get() || 0;
          if (percent.test(current)) {
            const { projection } = this.visualElement;
            if (projection && projection.layout) {
              const measuredAxis = projection.layout.layoutBox[axis];
              if (measuredAxis) {
                const length = calcLength(measuredAxis);
                current = length * (parseFloat(current) / 100);
              }
            }
          }
          this.originPoint[axis] = current;
        });
        if (onDragStart) {
          frame.postRender(() => onDragStart(event, info));
        }
        addValueToWillChange(this.visualElement, "transform");
        const { animationState } = this.visualElement;
        animationState && animationState.setActive("whileDrag", true);
      };
      const onMove = (event, info) => {
        const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
        if (!dragPropagation && !this.openDragLock)
          return;
        const { offset } = info;
        if (dragDirectionLock && this.currentDirection === null) {
          this.currentDirection = getCurrentDirection(offset);
          if (this.currentDirection !== null) {
            onDirectionLock && onDirectionLock(this.currentDirection);
          }
          return;
        }
        this.updateAxis("x", info.point, offset);
        this.updateAxis("y", info.point, offset);
        this.visualElement.render();
        onDrag && onDrag(event, info);
      };
      const onSessionEnd = (event, info) => this.stop(event, info);
      const resumeAnimation = () => eachAxis((axis) => {
        var _a;
        return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
      });
      const { dragSnapToOrigin } = this.getProps();
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd,
        resumeAnimation
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin,
        contextWindow: getContextWindow(this.visualElement)
      });
    }
    stop(event, info) {
      const isDragging2 = this.isDragging;
      this.cancel();
      if (!isDragging2)
        return;
      const { velocity } = info;
      this.startAnimation(velocity);
      const { onDragEnd } = this.getProps();
      if (onDragEnd) {
        frame.postRender(() => onDragEnd(event, info));
      }
    }
    cancel() {
      this.isDragging = false;
      const { projection, animationState } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = false;
      }
      this.panSession && this.panSession.end();
      this.panSession = void 0;
      const { dragPropagation } = this.getProps();
      if (!dragPropagation && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
      const { drag: drag2 } = this.getProps();
      if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      let next = this.originPoint[axis] + offset[axis];
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    }
    resolveConstraints() {
      var _a;
      const { dragConstraints, dragElastic } = this.getProps();
      const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
      const prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout2) {
          this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
        eachAxis((axis) => {
          if (this.constraints !== false && this.getAxisMotionValue(axis)) {
            this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
          }
        });
      }
    }
    resolveRefConstraints() {
      const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
      if (!constraints || !isRefObject(constraints))
        return false;
      const constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      const { projection } = this.visualElement;
      if (!projection || !projection.layout)
        return false;
      const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
      if (onMeasureDragConstraints) {
        const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    }
    startAnimation(velocity) {
      const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
      const constraints = this.constraints || {};
      const momentumAnimations = eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, this.currentDirection)) {
          return;
        }
        let transition = constraints && constraints[axis] || {};
        if (dragSnapToOrigin)
          transition = { min: 0, max: 0 };
        const bounceStiffness = dragElastic ? 200 : 1e6;
        const bounceDamping = dragElastic ? 40 : 1e7;
        const inertia2 = {
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...dragTransition,
          ...transition
        };
        return this.startAxisValueAnimation(axis, inertia2);
      });
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
      const axisValue = this.getAxisMotionValue(axis);
      addValueToWillChange(this.visualElement, axis);
      return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
      eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
      eachAxis((axis) => {
        var _a;
        return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
      });
    }
    getAnimationState(axis) {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
      const dragKey = `_drag${axis.toUpperCase()}`;
      const props = this.visualElement.getProps();
      const externalMotionValue = props[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
    }
    snapToCursor(point) {
      eachAxis((axis) => {
        const { drag: drag2 } = this.getProps();
        if (!shouldDrag(axis, drag2, this.currentDirection))
          return;
        const { projection } = this.visualElement;
        const axisValue = this.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          const { min, max } = projection.layout.layoutBox[axis];
          axisValue.set(point[axis] - mixNumber(min, max, 0.5));
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: drag2, dragConstraints } = this.getProps();
      const { projection } = this.visualElement;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints)
        return;
      this.stopAnimation();
      const boxProgress = { x: 0, y: 0 };
      eachAxis((axis) => {
        const axisValue = this.getAxisMotionValue(axis);
        if (axisValue && this.constraints !== false) {
          const latest = axisValue.get();
          boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
        }
      });
      const { transformTemplate } = this.visualElement.getProps();
      this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
      this.resolveConstraints();
      eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, null))
          return;
        const axisValue = this.getAxisMotionValue(axis);
        const { min, max } = this.constraints[axis];
        axisValue.set(mixNumber(min, max, boxProgress[axis]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      elementDragControls.set(this.visualElement, this);
      const element = this.visualElement.current;
      const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
        const { drag: drag2, dragListener = true } = this.getProps();
        drag2 && dragListener && this.start(event);
      });
      const measureDragConstraints = () => {
        const { dragConstraints } = this.getProps();
        if (isRefObject(dragConstraints) && dragConstraints.current) {
          this.constraints = this.resolveRefConstraints();
        }
      };
      const { projection } = this.visualElement;
      const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
      }
      frame.read(measureDragConstraints);
      const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
      const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
        if (this.isDragging && hasLayoutChanged) {
          eachAxis((axis) => {
            const motionValue2 = this.getAxisMotionValue(axis);
            if (!motionValue2)
              return;
            this.originPoint[axis] += delta[axis].translate;
            motionValue2.set(motionValue2.get() + delta[axis].translate);
          });
          this.visualElement.render();
        }
      }));
      return () => {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
        stopLayoutUpdateListener && stopLayoutUpdateListener();
      };
    }
    getProps() {
      const props = this.visualElement.getProps();
      const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
      return {
        ...props,
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      };
    }
  };
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
  var DragGesture = class extends Feature {
    constructor(node) {
      super(node);
      this.removeGroupControls = noop;
      this.removeListeners = noop;
      this.controls = new VisualElementDragControls(node);
    }
    mount() {
      const { dragControls } = this.node.getProps();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
      this.removeListeners = this.controls.addListeners() || noop;
    }
    unmount() {
      this.removeGroupControls();
      this.removeListeners();
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/pan/index.mjs
  init_define_import_meta_env();
  var asyncHandler = (handler) => (event, info) => {
    if (handler) {
      frame.postRender(() => handler(event, info));
    }
  };
  var PanGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
      this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: getContextWindow(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
      return {
        onSessionStart: asyncHandler(onPanSessionStart),
        onStart: asyncHandler(onPanStart),
        onMove: onPan,
        onEnd: (event, info) => {
          delete this.session;
          if (onPanEnd) {
            frame.postRender(() => onPanEnd(event, info));
          }
        }
      };
    }
    mount() {
      this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener();
      this.session && this.session.end();
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  init_define_import_meta_env();
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_react22 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/state.mjs
  init_define_import_meta_env();
  var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
  init_define_import_meta_env();
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  var correctBorderRadius = {
    correct: (latest, node) => {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      const x = pixelsToPercent(latest, node.target.x);
      const y = pixelsToPercent(latest, node.target.y);
      return `${x}% ${y}%`;
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
  init_define_import_meta_env();
  var correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
      const original = latest;
      const shadow = complex.parse(latest);
      if (shadow.length > 5)
        return original;
      const template = complex.createTransformer(latest);
      const offset = typeof shadow[0] !== "number" ? 1 : 0;
      const xScale = projectionDelta.x.scale * treeScale.x;
      const yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      const averageScale = mixNumber(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      return template(shadow);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  var MeasureLayoutWithContext = class extends import_react22.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
      const { projection } = visualElement;
      addScaleCorrector(defaultScaleCorrectors);
      if (projection) {
        if (layoutGroup.group)
          layoutGroup.group.add(projection);
        if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
          switchLayoutGroup.register(projection);
        }
        projection.root.didUpdate();
        projection.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        projection.setOptions({
          ...projection.options,
          onExitComplete: () => this.safeToRemove()
        });
      }
      globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
      const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
      const projection = visualElement.projection;
      if (!projection)
        return null;
      projection.isPresent = isPresent;
      if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          frame.postRender(() => {
            const stack = projection.getStack();
            if (!stack || !stack.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
      return null;
    }
    componentDidUpdate() {
      const { projection } = this.props.visualElement;
      if (projection) {
        projection.root.didUpdate();
        microtask.postRender(() => {
          if (!projection.currentAnimation && projection.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
      const { projection } = visualElement;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup && layoutGroup.group)
          layoutGroup.group.remove(projection);
        if (promoteContext && promoteContext.deregister)
          promoteContext.deregister(projection);
      }
    }
    safeToRemove() {
      const { safeToRemove } = this.props;
      safeToRemove && safeToRemove();
    }
    render() {
      return null;
    }
  };
  function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = (0, import_react22.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime5.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react22.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove });
  }
  var defaultScaleCorrectors = {
    borderRadius: {
      ...correctBorderRadius,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
  init_define_import_meta_env();
  function animateSingleValue(value, keyframes2, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
    return motionValue$1.animation;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
  init_define_import_meta_env();
  function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
  init_define_import_meta_env();
  var compareByDepth = (a, b) => a.depth - b.depth;

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
  var FlatTree = class {
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
    add(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    }
    remove(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    }
    forEach(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/delay.mjs
  init_define_import_meta_env();
  function delay(callback, timeout) {
    const start = time.now();
    const checkElapsed = ({ timestamp }) => {
      const elapsed = timestamp - start;
      if (elapsed >= timeout) {
        cancelFrame(checkElapsed);
        callback(elapsed - timeout);
      }
    };
    frame.read(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
  init_define_import_meta_env();
  var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  var numBorders = borders.length;
  var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
  var isPx = (value) => typeof value === "number" || px.test(value);
  function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
      target.opacity = mixNumber(
        0,
        // TODO Reinstate this if only child
        lead.opacity !== void 0 ? lead.opacity : 1,
        easeCrossfadeIn(progress2)
      );
      target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
      target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
    }
    for (let i = 0; i < numBorders; i++) {
      const borderLabel = `border${borders[i]}Radius`;
      let followRadius = getRadius(follow, borderLabel);
      let leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
        if (percent.test(leadRadius) || percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
    }
  }
  function getRadius(values, radiusName) {
    return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
  }
  var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
  var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
  function compress(min, max, easing) {
    return (p) => {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(progress(min, max, p));
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
  init_define_import_meta_env();
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }
  function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
  init_define_import_meta_env();
  function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
      translate = parseFloat(translate);
      const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
  init_define_import_meta_env();
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
  }
  function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
  }
  function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
  }
  function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
  }
  function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
  }
  function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/shared/stack.mjs
  init_define_import_meta_env();
  var NodeStack = class {
    constructor() {
      this.members = [];
    }
    add(node) {
      addUniqueItem(this.members, node);
      node.scheduleRender();
    }
    remove(node) {
      removeItem(this.members, node);
      if (node === this.prevLead) {
        this.prevLead = void 0;
      }
      if (node === this.lead) {
        const prevLead = this.members[this.members.length - 1];
        if (prevLead) {
          this.promote(prevLead);
        }
      }
    }
    relegate(node) {
      const indexOfNode = this.members.findIndex((member) => node === member);
      if (indexOfNode === 0)
        return false;
      let prevLead;
      for (let i = indexOfNode; i >= 0; i--) {
        const member = this.members[i];
        if (member.isPresent !== false) {
          prevLead = member;
          break;
        }
      }
      if (prevLead) {
        this.promote(prevLead);
        return true;
      } else {
        return false;
      }
    }
    promote(node, preserveFollowOpacity) {
      const prevLead = this.lead;
      if (node === prevLead)
        return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.instance && prevLead.scheduleRender();
        node.scheduleRender();
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity) {
          node.resumeFrom.preserveOpacity = true;
        }
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root && node.root.isUpdating) {
          node.isLayoutDirty = true;
        }
        const { crossfade } = node.options;
        if (crossfade === false) {
          prevLead.hide();
        }
      }
    }
    exitAnimationComplete() {
      this.members.forEach((node) => {
        const { options, resumingFrom } = node;
        options.onExitComplete && options.onExitComplete();
        if (resumingFrom) {
          resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
        }
      });
    }
    scheduleRender() {
      this.members.forEach((node) => {
        node.instance && node.scheduleRender(false);
      });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = void 0;
      }
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/styles/transform.mjs
  init_define_import_meta_env();
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform2 = "";
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) {
      transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
      const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
      if (transformPerspective)
        transform2 = `perspective(${transformPerspective}px) ${transform2}`;
      if (rotate)
        transform2 += `rotate(${rotate}deg) `;
      if (rotateX)
        transform2 += `rotateX(${rotateX}deg) `;
      if (rotateY)
        transform2 += `rotateY(${rotateY}deg) `;
      if (skewX)
        transform2 += `skewX(${skewX}deg) `;
      if (skewY)
        transform2 += `skewY(${skewY}deg) `;
    }
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform2 || "none";
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
  var metrics = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  var isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
  var transformAxes = ["", "X", "Y", "Z"];
  var hiddenVisibility = { visibility: "hidden" };
  var animationTarget = 1e3;
  var id2 = 0;
  function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    if (latestValues[key]) {
      values[key] = latestValues[key];
      visualElement.setStaticValue(key, 0);
      if (sharedAnimationValues) {
        sharedAnimationValues[key] = 0;
      }
    }
  }
  function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
      return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
      return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
      const { layout: layout2, layoutId } = projectionNode.options;
      window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
      cancelTreeOptimisedTransformAnimations(parent);
    }
  }
  function createProjectionNode2({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
      constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
        this.id = id2++;
        this.animationId = 0;
        this.children = /* @__PURE__ */ new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = { x: 1, y: 1 };
        this.eventHandlers = /* @__PURE__ */ new Map();
        this.hasTreeAnimated = false;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          if (isDebug) {
            metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
          }
          this.nodes.forEach(propagateDirtyNodes);
          this.nodes.forEach(resolveTargetDelta);
          this.nodes.forEach(calcProjection);
          this.nodes.forEach(cleanDirtyNodes);
          if (isDebug) {
            window.MotionDebug.record(metrics);
          }
        };
        this.resolvedRelativeTargetAt = 0;
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = /* @__PURE__ */ new Map();
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? [...parent.path, parent] : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        for (let i = 0; i < this.path.length; i++) {
          this.path[i].shouldResetTransform = true;
        }
        if (this.root === this)
          this.nodes = new FlatTree();
      }
      addEventListener(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      }
      notifyListeners(name, ...args) {
        const subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager && subscriptionManager.notify(...args);
      }
      hasListeners(name) {
        return this.eventHandlers.has(name);
      }
      /**
       * Lifecycles
       */
      mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
        if (this.instance)
          return;
        this.isSVG = isSVGElement(instance);
        this.instance = instance;
        const { layoutId, layout: layout2, visualElement } = this.options;
        if (visualElement && !visualElement.current) {
          visualElement.mount(instance);
        }
        this.root.nodes.add(this);
        this.parent && this.parent.children.add(this);
        if (isLayoutDirty && (layout2 || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          let cancelDelay;
          const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
          attachResizeListener(instance, () => {
            this.root.updateBlockedByResize = true;
            cancelDelay && cancelDelay();
            cancelDelay = delay(resizeUnblockUpdate, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              this.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
          this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
            if (this.isTreeAnimationBlocked()) {
              this.target = void 0;
              this.relativeTarget = void 0;
              return;
            }
            const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
            const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
            const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
            const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = void 0;
              }
              this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
              const animationOptions = {
                ...getValueTransition(layoutTransition, "layout"),
                onPlay: onLayoutAnimationStart,
                onComplete: onLayoutAnimationComplete
              };
              if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              this.startAnimation(animationOptions);
            } else {
              if (!hasLayoutChanged) {
                finishAnimation(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = newLayout;
          });
        }
      }
      unmount() {
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        const stack = this.getStack();
        stack && stack.remove(this);
        this.parent && this.parent.children.delete(this);
        this.instance = void 0;
        cancelFrame(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      // Note: currently only running on root node
      startUpdate() {
        if (this.isUpdateBlocked())
          return;
        this.isUpdating = true;
        this.nodes && this.nodes.forEach(resetSkewAndRotation);
        this.animationId++;
      }
      getTransformTemplate() {
        const { visualElement } = this.options;
        return visualElement && visualElement.getProps().transformTemplate;
      }
      willUpdate(shouldNotifyListeners = true) {
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          cancelTreeOptimisedTransformAnimations(this);
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.shouldResetTransform = true;
          node.updateScroll("snapshot");
          if (node.options.layoutRoot) {
            node.willUpdate(false);
          }
        }
        const { layoutId, layout: layout2 } = this.options;
        if (layoutId === void 0 && !layout2)
          return;
        const transformTemplate = this.getTransformTemplate();
        this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = false;
        const updateWasBlocked = this.isUpdateBlocked();
        if (updateWasBlocked) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (!this.isUpdating) {
          this.nodes.forEach(clearIsLayoutDirty);
        }
        this.isUpdating = false;
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
        this.clearAllSnapshots();
        const now2 = time.now();
        frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
        frameData.timestamp = now2;
        frameData.isProcessing = true;
        frameSteps.update.process(frameData);
        frameSteps.preRender.process(frameData);
        frameSteps.render.process(frameData);
        frameData.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          microtask.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        if (this.snapshot || !this.instance)
          return;
        this.snapshot = this.measure();
      }
      updateLayout() {
        if (!this.instance)
          return;
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let i = 0; i < this.path.length; i++) {
            const node = this.path[i];
            node.updateScroll();
          }
        }
        const prevLayout = this.layout;
        this.layout = this.measure(false);
        this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = void 0;
        this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement } = this.options;
        visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
      }
      updateScroll(phase = "measure") {
        let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
          needsMeasurement = false;
        }
        if (needsMeasurement) {
          const isRoot = checkIsScrollRoot(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase,
            isRoot,
            offset: measureScroll(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
          };
        }
      }
      resetTransform() {
        if (!resetTransform)
          return;
        const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        const transformTemplate = this.getTransformTemplate();
        const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure(removeTransform = true) {
        const pageBox = this.measurePageBox();
        let layoutBox = this.removeElementScroll(pageBox);
        if (removeTransform) {
          layoutBox = this.removeTransform(layoutBox);
        }
        roundBox(layoutBox);
        return {
          animationId: this.root.animationId,
          measuredBox: pageBox,
          layoutBox,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        var _a;
        const { visualElement } = this.options;
        if (!visualElement)
          return createBox();
        const box = visualElement.measureViewportBox();
        const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
        if (!wasInScrollRoot) {
          const { scroll } = this.root;
          if (scroll) {
            translateAxis(box.x, scroll.offset.x);
            translateAxis(box.y, scroll.offset.y);
          }
        }
        return box;
      }
      removeElementScroll(box) {
        var _a;
        const boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
          return boxWithoutScroll;
        }
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          const { scroll, options } = node;
          if (node !== this.root && scroll && options.layoutScroll) {
            if (scroll.wasRoot) {
              copyBoxInto(boxWithoutScroll, box);
            }
            translateAxis(boxWithoutScroll.x, scroll.offset.x);
            translateAxis(boxWithoutScroll.y, scroll.offset.y);
          }
        }
        return boxWithoutScroll;
      }
      applyTransform(box, transformOnly = false) {
        const withTransforms = createBox();
        copyBoxInto(withTransforms, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(withTransforms, {
              x: -node.scroll.offset.x,
              y: -node.scroll.offset.y
            });
          }
          if (!hasTransform(node.latestValues))
            continue;
          transformBox(withTransforms, node.latestValues);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues);
        }
        return withTransforms;
      }
      removeTransform(box) {
        const boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!node.instance)
            continue;
          if (!hasTransform(node.latestValues))
            continue;
          hasScale(node.latestValues) && node.updateSnapshot();
          const sourceBox = createBox();
          const nodeBox = node.measurePageBox();
          copyBoxInto(sourceBox, nodeBox);
          removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      }
      setTargetDelta(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(options) {
        this.options = {
          ...this.options,
          ...options,
          crossfade: options.crossfade !== void 0 ? options.crossfade : true
        };
      }
      clearMeasurements() {
        this.scroll = void 0;
        this.layout = void 0;
        this.snapshot = void 0;
        this.prevTransformTemplateValue = void 0;
        this.targetDelta = void 0;
        this.target = void 0;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (!this.relativeParent)
          return;
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta(forceRecalculation = false) {
        var _a;
        const lead = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
        this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        if (!this.layout || !(layout2 || layoutId))
          return;
        this.resolvedRelativeTargetAt = frameData.timestamp;
        if (!this.targetDelta && !this.relativeTarget) {
          const relativeParent = this.getClosestProjectingParent();
          if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
            this.relativeParent = relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
        if (!this.relativeTarget && !this.targetDelta)
          return;
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            this.target = this.applyTransform(this.layout.layoutBox);
          } else {
            copyBoxInto(this.target, this.layout.layoutBox);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          const relativeParent = this.getClosestProjectingParent();
          if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
            this.relativeParent = relativeParent;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
        if (isDebug) {
          metrics.resolvedTargetDeltas++;
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
          return void 0;
        }
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var _a;
        const lead = this.getLead();
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        let canSkip = true;
        if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
          canSkip = false;
        }
        if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          canSkip = false;
        }
        if (this.resolvedRelativeTargetAt === frameData.timestamp) {
          canSkip = false;
        }
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = void 0;
        }
        if (!this.layout || !(layout2 || layoutId))
          return;
        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
        const prevTreeScaleX = this.treeScale.x;
        const prevTreeScaleY = this.treeScale.y;
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
        if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          lead.target = lead.layout.layoutBox;
          lead.targetWithTransforms = createBox();
        }
        const { target } = lead;
        if (!target) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta || !this.prevProjectionDelta) {
          this.createProjectionDeltas();
        } else {
          copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
          copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
        }
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
        if (isDebug) {
          metrics.recalculatedProjection++;
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(notifyAll = true) {
        var _a;
        (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
        if (notifyAll) {
          const stack = this.getStack();
          stack && stack.scheduleRender();
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = void 0;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = createDelta();
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
        const snapshot = this.snapshot;
        const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
        const mixedValues = { ...this.latestValues };
        const targetDelta = createDelta();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = void 0;
        }
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        const relativeLayout = createBox();
        const snapshotSource = snapshot ? snapshot.source : void 0;
        const layoutSource = this.layout ? this.layout.source : void 0;
        const isSharedLayoutAnimation = snapshotSource !== layoutSource;
        const stack = this.getStack();
        const isOnlyMember = !stack || stack.members.length <= 1;
        const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        let prevRelativeTarget;
        this.mixTargetDelta = (latest) => {
          const progress2 = latest / 1e3;
          mixAxisDelta(targetDelta.x, delta.x, progress2);
          mixAxisDelta(targetDelta.y, delta.y, progress2);
          this.setTargetDelta(targetDelta);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
            mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
            if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
              this.isProjectionDirty = false;
            }
            if (!prevRelativeTarget)
              prevRelativeTarget = createBox();
            copyBoxInto(prevRelativeTarget, this.relativeTarget);
          }
          if (isSharedLayoutAnimation) {
            this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = progress2;
        };
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(options) {
        this.notifyListeners("animationStart");
        this.currentAnimation && this.currentAnimation.stop();
        if (this.resumingFrom && this.resumingFrom.currentAnimation) {
          this.resumingFrom.currentAnimation.stop();
        }
        if (this.pendingAnimation) {
          cancelFrame(this.pendingAnimation);
          this.pendingAnimation = void 0;
        }
        this.pendingAnimation = frame.update(() => {
          globalProjectionState.hasAnimatedSinceResize = true;
          this.currentAnimation = animateSingleValue(0, animationTarget, {
            ...options,
            onUpdate: (latest) => {
              this.mixTargetDelta(latest);
              options.onUpdate && options.onUpdate(latest);
            },
            onComplete: () => {
              options.onComplete && options.onComplete();
              this.completeAnimation();
            }
          });
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = void 0;
          this.resumingFrom.preserveOpacity = void 0;
        }
        const stack = this.getStack();
        stack && stack.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          this.mixTargetDelta && this.mixTargetDelta(animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        const lead = this.getLead();
        let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
        if (!targetWithTransforms || !target || !layout2)
          return;
        if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
          target = this.target || createBox();
          const xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min;
          target.x.max = target.x.min + xLength;
          const yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min;
          target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target);
        transformBox(targetWithTransforms, latestValues);
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
      registerSharedNode(layoutId, node) {
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        const stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        const config = node.options.initialPromotionConfig;
        node.promote({
          transition: config ? config.transition : void 0,
          preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
        });
      }
      isLead() {
        const stack = this.getStack();
        return stack ? stack.lead === this : true;
      }
      getLead() {
        var _a;
        const { layoutId } = this.options;
        return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
      }
      getPrevLead() {
        var _a;
        const { layoutId } = this.options;
        return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
      }
      getStack() {
        const { layoutId } = this.options;
        if (layoutId)
          return this.root.sharedNodes.get(layoutId);
      }
      promote({ needsReset, transition, preserveFollowOpacity } = {}) {
        const stack = this.getStack();
        if (stack)
          stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = void 0;
          this.needsReset = true;
        }
        if (transition)
          this.setOptions({ transition });
      }
      relegate() {
        const stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      }
      resetSkewAndRotation() {
        const { visualElement } = this.options;
        if (!visualElement)
          return;
        let hasDistortingTransform = false;
        const { latestValues } = visualElement;
        if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
          hasDistortingTransform = true;
        }
        if (!hasDistortingTransform)
          return;
        const resetValues = {};
        if (latestValues.z) {
          resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
        }
        for (let i = 0; i < transformAxes.length; i++) {
          resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
          resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        }
        visualElement.render();
        for (const key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
          if (this.animationValues) {
            this.animationValues[key] = resetValues[key];
          }
        }
        visualElement.scheduleRender();
      }
      getProjectionStyles(styleProp) {
        var _a, _b;
        if (!this.instance || this.isSVG)
          return void 0;
        if (!this.isVisible) {
          return hiddenVisibility;
        }
        const styles = {
          visibility: ""
        };
        const transformTemplate = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          styles.opacity = "";
          styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
          styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return styles;
        }
        const lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          const emptyStyles = {};
          if (this.options.layoutId) {
            emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
            emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return emptyStyles;
        }
        const valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          styles.transform = transformTemplate(valuesToRender, styles.transform);
        }
        const { x, y } = this.projectionDelta;
        styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
        if (lead.animationValues) {
          styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
        }
        for (const key in scaleCorrectors) {
          if (valuesToRender[key] === void 0)
            continue;
          const { correct, applyTo } = scaleCorrectors[key];
          const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
          if (applyTo) {
            const num = applyTo.length;
            for (let i = 0; i < num; i++) {
              styles[applyTo[i]] = corrected;
            }
          } else {
            styles[key] = corrected;
          }
        }
        if (this.options.layoutId) {
          styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
        }
        return styles;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((node) => {
          var _a;
          return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
        });
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      }
    };
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
      const { animationType } = node.options;
      const isShared = snapshot.source !== node.layout.source;
      if (animationType === "size") {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(axisSnapshot);
          axisSnapshot.min = layout2[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(layout2[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
      const layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
      const visualDelta = createDelta();
      if (isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
      } else {
        calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
      }
      const hasLayoutChanged = !isDeltaZero(layoutDelta);
      let hasRelativeTargetChanged = false;
      if (!node.resumeFrom) {
        const relativeParent = node.getClosestProjectingParent();
        if (relativeParent && !relativeParent.resumeFrom) {
          const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
          if (parentSnapshot && parentLayout) {
            const relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
            const relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
            if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
              hasRelativeTargetChanged = true;
            }
            if (relativeParent.options.layoutRoot) {
              node.relativeTarget = relativeLayout;
              node.relativeTargetOrigin = relativeSnapshot;
              node.relativeParent = relativeParent;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout2,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeTargetChanged
      });
    } else if (node.isLead()) {
      const { onExitComplete } = node.options;
      onExitComplete && onExitComplete();
    }
    node.options.transition = void 0;
  }
  function propagateDirtyNodes(node) {
    if (isDebug) {
      metrics.totalNodes++;
    }
    if (!node.parent)
      return;
    if (!node.isProjecting()) {
      node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
  }
  function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
  }
  function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
      visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
    node.isProjectionDirty = true;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDelta(output, delta, p) {
    output.translate = mixNumber(delta.translate, 0, p);
    output.scale = mixNumber(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = mixNumber(from.min, to.min, p);
    output.max = mixNumber(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
  var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
  function roundAxis(axis) {
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }
  function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
    return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
  }
  function checkNodeWasScrollRoot(node) {
    var _a;
    return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
  init_define_import_meta_env();
  var DocumentProjectionNode = createProjectionNode2({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => true
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
  var rootProjectionNode = {
    current: void 0
  };
  var HTMLProjectionNode = createProjectionNode2({
    measureScroll: (instance) => ({
      x: instance.scrollLeft,
      y: instance.scrollTop
    }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const documentNode = new DocumentProjectionNode({});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
      instance.style.transform = value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
  });

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/drag.mjs
  var drag = {
    pan: {
      Feature: PanGesture
    },
    drag: {
      Feature: DragGesture,
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/hover.mjs
  init_define_import_meta_env();
  function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var HoverGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = hover(current, (startEvent) => {
        handleHoverEvent(this.node, startEvent, "Start");
        return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
      });
    }
    unmount() {
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/focus.mjs
  init_define_import_meta_env();
  var FocusGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.isActive = false;
    }
    onFocus() {
      let isFocusVisible = false;
      try {
        isFocusVisible = this.node.current.matches(":focus-visible");
      } catch (e) {
        isFocusVisible = true;
      }
      if (!isFocusVisible || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
    onBlur() {
      if (!this.isActive || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
    mount() {
      this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/gestures/press.mjs
  init_define_import_meta_env();
  function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileTap) {
      node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var PressGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = press(current, (startEvent) => {
        handlePressEvent(this.node, startEvent, "Start");
        return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
      }, { useGlobalTarget: this.node.props.globalTapTarget });
    }
    unmount() {
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
  init_define_import_meta_env();
  var observerCallbacks = /* @__PURE__ */ new WeakMap();
  var observers = /* @__PURE__ */ new WeakMap();
  var fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
  };
  var fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
  var thresholdNames = {
    some: 0,
    all: 1
  };
  var InViewFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.hasEnteredView = false;
      this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport = {} } = this.node.getProps();
      const { root, margin: rootMargin, amount = "some", once } = viewport;
      const options = {
        root: root ? root.current : void 0,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      const onIntersectionUpdate = (entry) => {
        const { isIntersecting } = entry;
        if (this.isInView === isIntersecting)
          return;
        this.isInView = isIntersecting;
        if (once && !isIntersecting && this.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          this.hasEnteredView = true;
        }
        if (this.node.animationState) {
          this.node.animationState.setActive("whileInView", isIntersecting);
        }
        const { onViewportEnter, onViewportLeave } = this.node.getProps();
        const callback = isIntersecting ? onViewportEnter : onViewportLeave;
        callback && callback(entry);
      };
      return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver === "undefined")
        return;
      const { props, prevProps } = this.node;
      const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
      if (hasOptionsChanged) {
        this.startObserver();
      }
    }
    unmount() {
    }
  };
  function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  var gestureAnimations = {
    inView: {
      Feature: InViewFeature
    },
    tap: {
      Feature: PressGesture
    },
    focus: {
      Feature: FocusGesture
    },
    hover: {
      Feature: HoverGesture
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/motion/features/layout.mjs
  init_define_import_meta_env();
  var layout = {
    layout: {
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
  init_define_import_meta_env();
  var import_react23 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/VisualElement.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
  init_define_import_meta_env();
  var prefersReducedMotion = { current: null };
  var hasReducedMotionListener = { current: false };

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
  function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
      return;
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
      const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addListener(setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
  init_define_import_meta_env();
  var valueTypes = [...dimensionValueTypes, color, complex];
  var findValueType = (v) => valueTypes.find(testValueType(v));

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/store.mjs
  init_define_import_meta_env();
  var visualElementStore = /* @__PURE__ */ new WeakMap();

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
  init_define_import_meta_env();
  function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
      const nextValue = next[key];
      const prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
        if (true) {
          warnOnce(nextValue.version === "11.18.2", `Attempting to mix Motion versions ${nextValue.version} with 11.18.2 may not work as expected.`);
        }
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue, { owner: element }));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          const existingValue = element.getValue(key);
          if (existingValue.liveStyle === true) {
            existingValue.jump(nextValue);
          } else if (!existingValue.hasAnimated) {
            existingValue.set(nextValue);
          }
        } else {
          const latestValue = element.getStaticValue(key);
          element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
        }
      }
    }
    for (const key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/VisualElement.mjs
  var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  var VisualElement = class {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
      this.current = null;
      this.children = /* @__PURE__ */ new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = /* @__PURE__ */ new Map();
      this.KeyframeResolver = KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = /* @__PURE__ */ new Map();
      this.prevMotionValues = {};
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (!this.current)
          return;
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        const now2 = time.now();
        if (this.renderScheduledAt < now2) {
          this.renderScheduledAt = now2;
          frame.render(this.render, false, true);
        }
      };
      const { latestValues, renderState, onUpdate } = visualState;
      this.onUpdate = onUpdate;
      this.latestValues = latestValues;
      this.baseTarget = { ...latestValues };
      this.initialValues = props.initial ? { ...latestValues } : {};
      this.renderState = renderState;
      this.parent = parent;
      this.props = props;
      this.presenceContext = presenceContext;
      this.depth = parent ? parent.depth + 1 : 0;
      this.reducedMotionConfig = reducedMotionConfig;
      this.options = options;
      this.blockInitialAnimation = Boolean(blockInitialAnimation);
      this.isControllingVariants = isControllingVariants(props);
      this.isVariantNode = isVariantNode(props);
      if (this.isVariantNode) {
        this.variantChildren = /* @__PURE__ */ new Set();
      }
      this.manuallyAnimateOnMount = Boolean(parent && parent.current);
      const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
      for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
    }
    mount(instance) {
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((value, key) => this.bindToMotionValue(key, value));
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
      if (true) {
        warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
      }
      if (this.parent)
        this.parent.children.add(this);
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      visualElementStore.delete(this.current);
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach((remove) => remove());
      this.valueSubscriptions.clear();
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent && this.parent.children.delete(this);
      for (const key in this.events) {
        this.events[key].clear();
      }
      for (const key in this.features) {
        const feature = this.features[key];
        if (feature) {
          feature.unmount();
          feature.isMounted = false;
        }
      }
      this.current = null;
    }
    bindToMotionValue(key, value) {
      if (this.valueSubscriptions.has(key)) {
        this.valueSubscriptions.get(key)();
      }
      const valueIsTransform = transformProps.has(key);
      const removeOnChange = value.on("change", (latestValue) => {
        this.latestValues[key] = latestValue;
        this.props.onUpdate && frame.preRender(this.notifyUpdate);
        if (valueIsTransform && this.projection) {
          this.projection.isTransformDirty = true;
        }
      });
      const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
      let removeSyncCheck;
      if (window.MotionCheckAppearSync) {
        removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
      }
      this.valueSubscriptions.set(key, () => {
        removeOnChange();
        removeOnRenderRequest();
        if (removeSyncCheck)
          removeSyncCheck();
        if (value.owner)
          value.stop();
      });
    }
    sortNodePosition(other) {
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
      let key = "animation";
      for (key in featureDefinitions) {
        const featureDefinition = featureDefinitions[key];
        if (!featureDefinition)
          continue;
        const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
        if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
          this.features[key] = new FeatureConstructor(this);
        }
        if (this.features[key]) {
          const feature = this.features[key];
          if (feature.isMounted) {
            feature.update();
          } else {
            feature.mount();
            feature.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
    getStaticValue(key) {
      return this.latestValues[key];
    }
    setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      for (let i = 0; i < propEventHandlers.length; i++) {
        const key = propEventHandlers[i];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        const listenerName = "on" + key;
        const listener = props[listenerName];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
      this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
      return this.props.variants ? this.props.variants[name] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
      const closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
      const existingValue = this.values.get(key);
      if (value !== existingValue) {
        if (existingValue)
          this.removeValue(key);
        this.bindToMotionValue(key, value);
        this.values.set(key, value);
        this.latestValues[key] = value.get();
      }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
      this.values.delete(key);
      const unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions.delete(key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
      return this.values.has(key);
    }
    getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      let value = this.values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
      var _a;
      let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
      if (value !== void 0 && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone2(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
      var _a;
      const { initial } = this.props;
      let valueFromInitial;
      if (typeof initial === "string" || typeof initial === "object") {
        const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
        if (variant) {
          valueFromInitial = variant[key];
        }
      }
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      const target = this.getBaseTargetFromProps(this.props, key);
      if (target !== void 0 && !isMotionValue(target))
        return target;
      return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].notify(...args);
      }
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
  var DOMVisualElement = class extends VisualElement {
    constructor() {
      super(...arguments);
      this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
      return props.style ? props.style[key] : void 0;
    }
    removeValueFromRenderState(key, { vars, style }) {
      delete vars[key];
      delete style[key];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      const { children } = this.props;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", (latest) => {
          if (this.current) {
            this.current.textContent = `${latest}`;
          }
        });
      }
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
  function getComputedStyle(element) {
    return window.getComputedStyle(element);
  }
  var HTMLVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      } else {
        const computedStyle = getComputedStyle(instance);
        const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
      return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
      buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
  init_define_import_meta_env();
  var SVGVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
      return props[key];
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
      buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      super.mount(instance);
    }
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
  var createDomVisualElement = (Component3, options) => {
    return isSVGComponent(Component3) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
      allowProjection: Component3 !== import_react23.Fragment
    });
  };

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/motion/create.mjs
  var createMotionComponent = /* @__PURE__ */ createMotionComponentFactory({
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout
  }, createDomVisualElement);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
  var motion = /* @__PURE__ */ createDOMMotionComponentProxy(createMotionComponent);

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
  init_define_import_meta_env();
  var import_react24 = __toESM(require_react_shim(), 1);
  function useMotionValue(initial) {
    const value = useConstant(() => motionValue(initial));
    const { isStatic } = (0, import_react24.useContext)(MotionConfigContext);
    if (isStatic) {
      const [, setLatest] = (0, import_react24.useState)(initial);
      (0, import_react24.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
  function useCombineMotionValues(values, combineValues) {
    const value = useMotionValue(combineValues());
    const updateValue = () => value.set(combineValues());
    updateValue();
    useIsomorphicLayoutEffect(() => {
      const scheduleUpdate = () => frame.preRender(updateValue, false, true);
      const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
      return () => {
        subscriptions.forEach((unsubscribe) => unsubscribe());
        cancelFrame(updateValue);
      };
    });
    return value;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-transform.mjs
  init_define_import_meta_env();

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/transform.mjs
  init_define_import_meta_env();
  var isCustomValueType = (v) => {
    return v && typeof v === "object" && v.mix;
  };
  var getMixer2 = (v) => isCustomValueType(v) ? v.mix : void 0;
  function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = interpolate(inputRange, outputRange, {
      mixer: getMixer2(outputRange[0]),
      ...options
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-computed.mjs
  init_define_import_meta_env();
  function useComputed(compute) {
    collectMotionValues.current = [];
    compute();
    const value = useCombineMotionValues(collectMotionValues.current, compute);
    collectMotionValues.current = void 0;
    return value;
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/value/use-transform.mjs
  function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
      return useComputed(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  }
  function useListTransform(values, transformer) {
    const latest = useConstant(() => []);
    return useCombineMotionValues(values, () => {
      latest.length = 0;
      const numValues = values.length;
      for (let i = 0; i < numValues; i++) {
        latest[i] = values[i].get();
      }
      return transformer(latest);
    });
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-in-view.mjs
  init_define_import_meta_env();
  var import_react25 = __toESM(require_react_shim(), 1);

  // shiftly-marketing/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
  init_define_import_meta_env();
  var thresholds = {
    some: 0,
    all: 1
  };
  function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = resolveElements(elementOrSelector);
    const activeIntersections = /* @__PURE__ */ new WeakMap();
    const onIntersectionChange = (entries) => {
      entries.forEach((entry) => {
        const onEnd = activeIntersections.get(entry.target);
        if (entry.isIntersecting === Boolean(onEnd))
          return;
        if (entry.isIntersecting) {
          const newOnEnd = onStart(entry);
          if (typeof newOnEnd === "function") {
            activeIntersections.set(entry.target, newOnEnd);
          } else {
            observer.unobserve(entry.target);
          }
        } else if (typeof onEnd === "function") {
          onEnd(entry);
          activeIntersections.delete(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
      root,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }

  // shiftly-marketing/node_modules/framer-motion/dist/es/utils/use-in-view.mjs
  function useInView(ref, { root, margin, amount, once = false } = {}) {
    const [isInView, setInView] = (0, import_react25.useState)(false);
    (0, import_react25.useEffect)(() => {
      if (!ref.current || once && isInView)
        return;
      const onEnter = () => {
        setInView(true);
        return once ? void 0 : () => setInView(false);
      };
      const options = {
        root: root && root.current || void 0,
        margin,
        amount
      };
      return inView(ref.current, onEnter, options);
    }, [root, ref, margin, once, amount]);
    return isInView;
  }

  // shiftly-marketing/components/Hero.tsx
  function Hero() {
    const canvasRef = (0, import_react26.useRef)(null);
    const sectionRef = (0, import_react26.useRef)(null);
    const phoneRef = (0, import_react26.useRef)(null);
    const [mousePos, setMousePos] = (0, import_react26.useState)({ x: 0, y: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
    const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
    (0, import_react26.useEffect)(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const particles = [];
      const PARTICLE_COUNT = 120;
      const CONNECTION_DIST = 120;
      const resize = () => {
        const section = sectionRef.current;
        canvas.width = section ? section.clientWidth : window.innerWidth;
        canvas.height = section ? section.clientHeight : window.innerHeight;
      };
      resize();
      const ro = new ResizeObserver(resize);
      if (sectionRef.current) ro.observe(sectionRef.current);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      let animId;
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
          ctx.fill();
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST) {
              const alpha2 = (1 - dist / CONNECTION_DIST) * 0.15;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha2})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
        animId = requestAnimationFrame(draw);
      };
      draw();
      return () => {
        cancelAnimationFrame(animId);
        ro.disconnect();
      };
    }, []);
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;
      const x = Math.max(0, Math.min(rect.width, rawX));
      const y = Math.max(0, Math.min(rect.height, rawY));
      setMousePos({ x, y });
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(x - centerX);
      mouseY.set(y - centerY);
    };
    return /* @__PURE__ */ React.createElement(
      motion.section,
      {
        ref: sectionRef,
        onMouseMove: handleMouseMove,
        className: "relative min-h-screen flex flex-col items-center justify-center",
        style: { overflow: "hidden", paddingTop: "80px" }
      },
      /* @__PURE__ */ React.createElement(
        "canvas",
        {
          ref: canvasRef,
          className: "absolute inset-0 w-full h-full pointer-events-none",
          style: { zIndex: 0 }
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 grid-overlay opacity-40 pointer-events-none", style: { zIndex: 1 } }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute pointer-events-none transition-opacity duration-300",
          style: {
            zIndex: 2,
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            borderRadius: "50%"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute pointer-events-none",
          style: { zIndex: 1, top: "10%", left: "10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)", filter: "blur(120px)", animation: "float 6s ease-in-out infinite" }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute pointer-events-none",
          style: { zIndex: 1, bottom: "20%", right: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(120px)", animation: "float 8s ease-in-out infinite 2s" }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute pointer-events-none",
          style: { zIndex: 1, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)", filter: "blur(120px)", animation: "float 7s ease-in-out infinite 1s" }
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "relative flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto px-6 w-full", style: { zIndex: 10 } }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl" }, /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-slate-300"
        },
        /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, "\u2726"),
        /* @__PURE__ */ React.createElement("span", null, "Now available on all platforms")
      ), /* @__PURE__ */ React.createElement(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        },
        /* @__PURE__ */ React.createElement("span", { className: "text-white" }, "Work hours,"),
        /* @__PURE__ */ React.createElement("br", null),
        /* @__PURE__ */ React.createElement("span", { className: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent" }, "tracked perfectly.")
      ), /* @__PURE__ */ React.createElement(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.35 },
          className: "text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
        },
        "Log shifts, calculate your salary, detect overtime, and sync everything to Google Calendar \u2014 all in one elegant app."
      ), /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.45 },
          className: "flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
        },
        /* @__PURE__ */ React.createElement(
          motion.button,
          {
            whileHover: { scale: 1.04, boxShadow: "0 0 40px rgba(59,130,246,0.6)" },
            whileTap: { scale: 0.96 },
            className: "px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl shadow-electric transition-all duration-200 flex items-center gap-2"
          },
          /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M9 1.5L9 12M9 12L5.5 8.5M9 12L12.5 8.5", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M2 14.5h14", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
          "Download Free"
        ),
        /* @__PURE__ */ React.createElement(
          motion.button,
          {
            whileHover: { scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" },
            whileTap: { scale: 0.96 },
            className: "px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
          },
          /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "7.5", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M9 5v4l2.5 2.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })),
          "Open Web App"
        )
      ), /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.6 },
          className: "flex flex-wrap items-center gap-6 text-sm text-slate-500"
        },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-yellow-400" }, "\u2605"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-300 font-medium" }, "4.9"), /* @__PURE__ */ React.createElement("span", null, "on App Store")),
        /* @__PURE__ */ React.createElement("div", { className: "w-px h-4 bg-white/10" }),
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z", fill: "#60a5fa" })), /* @__PURE__ */ React.createElement("span", { className: "text-slate-300 font-medium" }, "10k+"), /* @__PURE__ */ React.createElement("span", null, "users")),
        /* @__PURE__ */ React.createElement("div", { className: "w-px h-4 bg-white/10" }),
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "1", y: "1", width: "12", height: "12", rx: "2", stroke: "#60a5fa", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("path", { d: "M4 5h6M4 7.5h4", stroke: "#60a5fa", strokeWidth: "1.2", strokeLinecap: "round" })), /* @__PURE__ */ React.createElement("span", null, "Google Calendar sync"))
      )), /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 40, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
          style: {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: "1000px"
          },
          className: "relative hidden lg:flex items-center justify-center"
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "absolute inset-0 rounded-[50px]",
            style: {
              background: "radial-gradient(ellipse, rgba(59,130,246,0.25) 0%, transparent 70%)",
              filter: "blur(30px)",
              transform: "scale(1.3)"
            }
          }
        ),
        /* @__PURE__ */ React.createElement(
          motion.div,
          {
            ref: phoneRef,
            animate: { y: [0, -12, 0] },
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            className: "relative w-64 h-[520px] rounded-[40px] border-2 border-white/10 bg-[#0a0f1e] shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(59,130,246,0.15)] overflow-hidden"
          },
          /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" }),
          /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full pt-12 px-4 pb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center text-[10px] text-slate-500 mb-4 px-1" }, /* @__PURE__ */ React.createElement("span", null, "9:41"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-1.5 border border-slate-500 rounded-sm" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-full bg-slate-400 rounded-sm" })), /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M1 6L4 3L6 5L9 2", stroke: "#94a3b8", strokeWidth: "1.2", strokeLinecap: "round" })))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-5" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500" }, "Today"), /* @__PURE__ */ React.createElement("div", { className: "text-white font-bold text-sm" }, "My Shifts")), /* @__PURE__ */ React.createElement("div", { className: "w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M6 1L6 11M1 6L11 6", stroke: "#60a5fa", strokeWidth: "1.5", strokeLinecap: "round" })))), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-blue-200 text-[10px] mb-1" }, "Today's Earnings"), /* @__PURE__ */ React.createElement("div", { className: "text-white text-2xl font-bold" }, "$142.50"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1 mt-1" }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M1 7L4 4L6 6L9 2", stroke: "#93c5fd", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("span", { className: "text-blue-200 text-[10px]" }, "+12% vs last week"))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2 flex-1" }, [
            { time: "08:00 \u2013 12:00", label: "Morning Shift", hrs: "4h", status: "done" },
            { time: "13:00 \u2013 17:30", label: "Afternoon Shift", hrs: "4.5h", status: "active" },
            { time: "18:00 \u2013 21:00", label: "Evening Shift", hrs: "3h", status: "upcoming" }
          ].map((shift, i) => /* @__PURE__ */ React.createElement(
            "div",
            {
              key: i,
              className: `flex items-center gap-2 px-3 py-2.5 rounded-xl border ${shift.status === "active" ? "border-blue-500/40 bg-blue-500/10" : "border-white/5 bg-white/[0.03]"}`
            },
            /* @__PURE__ */ React.createElement("div", { className: `w-2 h-2 rounded-full flex-shrink-0 ${shift.status === "done" ? "bg-green-400" : shift.status === "active" ? "bg-blue-400" : "bg-slate-600"}` }),
            /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-white text-[10px] font-medium truncate" }, shift.label), /* @__PURE__ */ React.createElement("div", { className: "text-slate-500 text-[9px]" }, shift.time)),
            /* @__PURE__ */ React.createElement("div", { className: "text-blue-400 text-[10px] font-semibold" }, shift.hrs)
          ))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-around mt-4 pt-3 border-t border-white/5" }, [
            { icon: "\u229E", label: "Shifts", active: true },
            { icon: "\u25D1", label: "Stats", active: false },
            { icon: "\u25C8", label: "Calendar", active: false },
            { icon: "\u25C9", label: "Profile", active: false }
          ].map((item) => /* @__PURE__ */ React.createElement("div", { key: item.label, className: "flex flex-col items-center gap-0.5" }, /* @__PURE__ */ React.createElement("span", { className: `text-base ${item.active ? "text-blue-400" : "text-slate-600"}` }, item.icon), /* @__PURE__ */ React.createElement("span", { className: `text-[8px] ${item.active ? "text-blue-400" : "text-slate-600"}` }, item.label)))))
        ),
        /* @__PURE__ */ React.createElement(
          motion.div,
          {
            animate: { y: [0, -6, 0] },
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            className: "absolute -left-16 top-1/3 bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2"
          },
          /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 5l2.5 2.5L8 2.5", stroke: "#4ade80", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }))),
          /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-white text-[10px] font-semibold" }, "Shift Logged"), /* @__PURE__ */ React.createElement("div", { className: "text-slate-400 text-[9px]" }, "4h 30m tracked"))
        ),
        /* @__PURE__ */ React.createElement(
          motion.div,
          {
            animate: { y: [0, 6, 0] },
            transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            className: "absolute -right-14 top-2/3 bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-xl px-3 py-2"
          },
          /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-400 mb-0.5" }, "Week earnings"),
          /* @__PURE__ */ React.createElement("div", { className: "text-blue-400 font-bold text-sm" }, "$847.20")
        )
      )),
      /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.2 },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
          style: { zIndex: 10 }
        },
        /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 text-xs tracking-widest uppercase" }, "Scroll"),
        /* @__PURE__ */ React.createElement(
          motion.div,
          {
            animate: { y: [0, 6, 0] },
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          },
          /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M4 7l6 6 6-6", stroke: "#475569", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }))
        )
      )
    );
  }

  // shiftly-marketing/components/Nav.tsx
  init_define_import_meta_env();
  var import_react27 = __toESM(require_react_shim());
  var navLinks = [
    { label: "Features", href: "#features" },
    { label: "Platforms", href: "#platforms" },
    { label: "Pricing", href: "#cta" },
    { label: "Download", href: "#cta" }
  ];
  function Nav() {
    const [scrolled, setScrolled] = (0, import_react27.useState)(false);
    const [mobileOpen, setMobileOpen] = (0, import_react27.useState)(false);
    (0, import_react27.useEffect)(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleLinkClick = (href) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return /* @__PURE__ */ React.createElement(
      motion.nav,
      {
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-6 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(
        motion.a,
        {
          href: "#hero",
          onClick: (e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          },
          className: "flex items-center gap-2 group",
          whileHover: { scale: 1.02 }
        },
        /* @__PURE__ */ React.createElement("img", { src: "/icon.png", alt: "Shiftly", width: 32, height: 32, className: "rounded-xl shadow-electric" }),
        /* @__PURE__ */ React.createElement("span", { className: "text-lg font-bold text-white tracking-tight" }, "Shiftly")
      ), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center gap-8" }, navLinks.map((link) => /* @__PURE__ */ React.createElement(
        motion.a,
        {
          key: link.label,
          href: link.href,
          onClick: (e) => {
            e.preventDefault();
            handleLinkClick(link.href);
          },
          className: "text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group",
          whileHover: { y: -1 }
        },
        link.label,
        /* @__PURE__ */ React.createElement("span", { className: "absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" })
      ))), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
        motion.button,
        {
          onClick: () => handleLinkClick("#cta"),
          className: "px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl shadow-electric transition-all duration-200",
          whileHover: { scale: 1.03, boxShadow: "0 0 40px rgba(59,130,246,0.5)" },
          whileTap: { scale: 0.97 }
        },
        "Download Free"
      )), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setMobileOpen(!mobileOpen),
          className: "md:hidden flex flex-col gap-1.5 p-2 rounded-lg",
          "aria-label": "Toggle menu"
        },
        /* @__PURE__ */ React.createElement(
          motion.span,
          {
            animate: { rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 },
            className: "w-5 h-0.5 bg-white block origin-center transition-all"
          }
        ),
        /* @__PURE__ */ React.createElement(
          motion.span,
          {
            animate: { opacity: mobileOpen ? 0 : 1 },
            className: "w-5 h-0.5 bg-white block"
          }
        ),
        /* @__PURE__ */ React.createElement(
          motion.span,
          {
            animate: { rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 },
            className: "w-5 h-0.5 bg-white block origin-center transition-all"
          }
        )
      )),
      /* @__PURE__ */ React.createElement(AnimatePresence, null, mobileOpen && /* @__PURE__ */ React.createElement(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          className: "md:hidden overflow-hidden bg-black/60 backdrop-blur-xl border-t border-white/5"
        },
        /* @__PURE__ */ React.createElement("div", { className: "px-6 py-6 flex flex-col gap-4" }, navLinks.map((link, i) => /* @__PURE__ */ React.createElement(
          motion.a,
          {
            key: link.label,
            href: link.href,
            onClick: (e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            },
            initial: { x: -20, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: i * 0.05 },
            className: "text-slate-300 hover:text-white py-2 text-base border-b border-white/5 last:border-0"
          },
          link.label
        )), /* @__PURE__ */ React.createElement(
          motion.button,
          {
            initial: { x: -20, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: navLinks.length * 0.05 },
            onClick: () => handleLinkClick("#cta"),
            className: "mt-2 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl w-full"
          },
          "Download Free"
        ))
      ))
    );
  }

  // shiftly-marketing/components/Features.tsx
  init_define_import_meta_env();
  var features = [
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 6v6l4 2" })),
      title: "Time Tracking",
      description: "Log every minute automatically with one tap. Start and stop shifts with precision timing and never lose a billable hour again."
    },
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 10h8M8 14h5M8 6h8" })),
      title: "Salary Calculator",
      description: "Real-time earnings based on your hourly rate and hours worked. Set custom rates, deductions, and see your exact take-home pay."
    },
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M18 20V10M12 20V4M6 20v-6" })),
      title: "Analytics Dashboard",
      description: "Weekly, monthly, and yearly stats at a glance. Visualize your work patterns, peak hours, and income trends over time."
    },
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })),
      title: "Overtime Detection",
      description: "Automatic alerts when approaching overtime limits. Stay compliant with labor laws and maximize your overtime pay rates."
    },
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M16 2v4M8 2v4M3 10h18" }), /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "15", r: "1", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "15", r: "1", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "15", r: "1", fill: "currentColor" })),
      title: "Google Calendar Sync",
      description: "All shifts synced seamlessly to your Google Calendar. Share schedules with your team and keep everything in one place."
    },
    {
      icon: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" })),
      title: "Cloud Sync",
      description: "Access your data from any device, instantly. Your shifts, earnings, and settings are always up-to-date across all platforms."
    }
  ];
  var containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  var cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };
  function Features() {
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 px-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
        className: "text-center mb-20"
      },
      /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z", fill: "currentColor" })), "Everything you need"),
      /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" }, "Built for how you actually work"),
      /* @__PURE__ */ React.createElement("p", { className: "text-lg text-slate-400 max-w-2xl mx-auto" }, "Every feature is designed with the working professional in mind. Simple to start, powerful when you need it.")
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      },
      features.map((feature, index) => /* @__PURE__ */ React.createElement(
        motion.div,
        {
          key: feature.title,
          variants: cardVariants,
          custom: index,
          whileHover: {
            y: -4,
            borderColor: "rgba(59, 130, 246, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.05)"
          },
          className: "group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] cursor-default"
        },
        /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-500/15 transition-colors duration-300" }, feature.icon),
        /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold text-white mb-2.5 group-hover:text-blue-100 transition-colors duration-300" }, feature.title),
        /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed" }, feature.description),
        /* @__PURE__ */ React.createElement("div", { className: "mt-5 flex items-center gap-1.5 text-blue-500/0 group-hover:text-blue-400 transition-all duration-300 text-sm font-medium" }, /* @__PURE__ */ React.createElement("span", null, "Learn more"), /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", className: "translate-x-0 group-hover:translate-x-1 transition-transform duration-300" }, /* @__PURE__ */ React.createElement("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })))
      ))
    )));
  }

  // shiftly-marketing/components/InteractiveShowcase.tsx
  init_define_import_meta_env();
  var import_react28 = __toESM(require_react_shim());
  var ease2 = [0.16, 1, 0.3, 1];
  function PhoneFrame({ children }) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "relative flex-shrink-0 overflow-hidden",
        style: {
          width: 256,
          height: 532,
          borderRadius: 40,
          background: "#0b1220",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 50px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)"
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute -right-px top-24 w-0.5 h-7 bg-white/[0.07] rounded-full" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute -left-px top-20 w-0.5 h-5 bg-white/[0.07] rounded-full" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute -left-px top-[104px] w-0.5 h-9 bg-white/[0.07] rounded-full" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute top-[10px] left-1/2 -translate-x-1/2 w-[68px] h-[14px] bg-black rounded-full z-20" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 pointer-events-none z-10", style: { background: "linear-gradient(130deg, rgba(255,255,255,0.025) 0%, transparent 45%)" } }),
      /* @__PURE__ */ React.createElement("div", { className: "h-full overflow-hidden", style: { paddingTop: 30 } }, children)
    );
  }
  var WEEKS = [
    [1, "9h", "283z\u0142"],
    [2, "8.5h", "267z\u0142"],
    [3, "8.5h", "267z\u0142"],
    [4, null, null],
    [5, "8.5h", "267z\u0142"],
    [6, null, null, "sat"],
    [7, "8h", "251z\u0142", "sun"],
    [8, "9h", "283z\u0142"],
    [9, "8.5h", "267z\u0142"],
    [10, "8.5h", "267z\u0142"],
    [11, null, null],
    [12, null, null],
    [13, "0h", null, "sat"],
    [14, "0h", null, "sun"],
    [15, "9h", "283z\u0142"],
    [16, "8.5h", "267z\u0142"],
    [17, "8.5h", "267z\u0142"],
    [18, "9h", "283z\u0142"],
    [19, "11h", "345z\u0142"],
    [20, null, null, "sat"],
    [21, "7h", "220z\u0142", "sun"],
    [22, "9h", "283z\u0142"],
    [23, "8.5h", "267z\u0142"],
    [24, "8h+2", "345z\u0142", "today"],
    [25, null, null],
    [26, null, null],
    [27, null, null, "sat"],
    [28, null, null, "sun"],
    [29, null, null],
    [30, null, null]
  ];
  function CalendarScreen() {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full text-white" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-3 pt-2 pb-2 flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[6.5px] text-slate-500 uppercase tracking-[0.18em]" }, "TIME TRACKING"), /* @__PURE__ */ React.createElement("div", { className: "font-bold text-[13px] tracking-tight" }, "Shiftly")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 border border-white/10 flex items-center justify-center overflow-hidden" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "6", r: "3.5", fill: "#475569" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "8", cy: "13", rx: "5.5", ry: "3.5", fill: "#475569" }))), /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-lg flex items-center justify-center", style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "1", y: "7", width: "2", height: "4", rx: "0.5", fill: "#22d3ee" }), /* @__PURE__ */ React.createElement("rect", { x: "5", y: "4", width: "2", height: "7", rx: "0.5", fill: "#22d3ee" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "1", width: "2", height: "10", rx: "0.5", fill: "#22d3ee" }))), /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-lg flex items-center justify-center", style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "6", r: "2", stroke: "#94a3b8", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("path", { d: "M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11", stroke: "#94a3b8", strokeWidth: "0.9", strokeLinecap: "round" }))))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-5 py-0.5 flex-shrink-0" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-base leading-none" }, "\u2039"), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[11px]" }, "June 2026"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-base leading-none" }, "\u203A")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 px-1.5 mb-0.5 flex-shrink-0" }, ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => /* @__PURE__ */ React.createElement("div", { key: d, className: `text-center text-[6.5px] font-semibold py-0.5 ${d === "SAT" || d === "SUN" ? "text-red-400/60" : "text-slate-500"}` }, d))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-[2px] px-1.5 flex-1 content-start" }, WEEKS.map(([day, hrs, pay, type]) => {
      const isToday = type === "today";
      const isWeekend = type === "sat" || type === "sun";
      const hasShift = hrs !== null;
      return /* @__PURE__ */ React.createElement("div", { key: String(day), className: "rounded flex flex-col items-center justify-center py-0.5", style: {
        minHeight: 47,
        background: isToday ? "rgba(245,158,11,0.12)" : hasShift ? "rgba(255,255,255,0.03)" : "transparent",
        border: isToday ? "1px solid rgba(245,158,11,0.4)" : hasShift ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent"
      } }, /* @__PURE__ */ React.createElement("div", { className: `text-[7.5px] font-semibold mb-[1px] ${isWeekend ? "text-red-400/60" : isToday ? "text-amber-400" : "text-slate-300"}` }, String(day)), hasShift ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `text-[6.5px] font-bold ${isToday ? "text-amber-300" : "text-cyan-400"}` }, String(hrs)), pay && /* @__PURE__ */ React.createElement("div", { className: "text-[5.5px] text-emerald-400" }, String(pay)), isToday && /* @__PURE__ */ React.createElement("div", { className: "text-[5px] text-amber-400/60" }, "plan")) : /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-700/60" }, "+"));
    })), /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 mt-1 border-t border-white/[0.05] pt-1.5 pb-1.5 flex justify-around" }, [["18", "DAYS", "text-white"], ["138.5", "HOURS", "text-white"], ["4443", "Z\u0141", "text-cyan-400"]].map(([v, l, c]) => /* @__PURE__ */ React.createElement("div", { key: l, className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: `text-[12px] font-bold ${c}` }, v), /* @__PURE__ */ React.createElement("div", { className: "text-[6px] text-slate-500" }, l)))), /* @__PURE__ */ React.createElement("div", { className: "text-center text-[6.5px] text-slate-600 pb-2 flex-shrink-0" }, "31.4 z\u0142/hr"));
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var BARS = [0, 0, 0, 0, 0, 139, 0, 0, 0, 0, 0, 0];
  function StatsScreen() {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full text-white" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-3 pt-2 pb-1.5 flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-lg flex items-center justify-center", style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M6.5 2L3 5l3.5 3", stroke: "#94a3b8", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[13px]" }, "Statistics"), /* @__PURE__ */ React.createElement("div", { className: "w-6 h-6 rounded-lg flex items-center justify-center", style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5 1v5.5M2.5 4.5L5 7.5l2.5-3", stroke: "#94a3b8", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-6 py-0.5 flex-shrink-0" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-sm leading-none" }, "\u2039"), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[11px]" }, "2026"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-sm leading-none" }, "\u203A")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1.5 px-2.5 py-1.5 flex-shrink-0" }, [["18", "DAYS", "text-white"], ["138.5", "HOURS", "text-white"], ["4443", "Z\u0141", "text-cyan-400"]].map(([v, l, c]) => /* @__PURE__ */ React.createElement("div", { key: l, className: "flex-1 rounded-xl py-1.5 text-center", style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" } }, /* @__PURE__ */ React.createElement("div", { className: `text-[11px] font-bold ${c}` }, v), /* @__PURE__ */ React.createElement("div", { className: "text-[6px] text-slate-500" }, l)))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-0.5 mx-2.5 mb-1.5 p-0.5 rounded-xl flex-shrink-0", style: { background: "rgba(255,255,255,0.04)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-center py-1 rounded-lg text-[9px] font-semibold text-black", style: { background: "white" } }, "Hours"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-center py-1 text-slate-400 text-[9px]" }, "Earnings")), /* @__PURE__ */ React.createElement("div", { className: "px-2.5 flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-[3px] h-14" }, BARS.map((h, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex-1 flex flex-col items-center gap-0.5" }, i === 5 && h > 0 && /* @__PURE__ */ React.createElement("span", { className: "text-[5px] text-slate-400" }, h), /* @__PURE__ */ React.createElement("div", { className: "w-full rounded-t-[2px]", style: { height: h > 0 ? `${h / 139 * 52}px` : "2px", background: i === 5 ? "#22d3ee" : "rgba(255,255,255,0.05)" } })))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-[3px] mt-1" }, MONTHS.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m, className: `flex-1 text-center text-[5px] ${i === 5 ? "text-cyan-400" : "text-slate-700"}` }, m)))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-hidden mx-2.5 mt-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 text-[6px] text-slate-500 font-medium pb-1 mb-0.5 px-1", style: { borderBottom: "1px solid rgba(255,255,255,0.05)" } }, ["MONTH", "DAYS", "HOURS", "EARNINGS"].map((h, i) => /* @__PURE__ */ React.createElement("div", { key: h, className: i > 0 ? "text-right" : "" }, h))), MONTHS.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m, className: `grid grid-cols-4 text-[7px] py-[3px] px-1 rounded ${i === 5 ? "bg-white/[0.04]" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: i === 5 ? "text-cyan-400 font-semibold" : "text-slate-500" }, i === 5 ? "June" : m), /* @__PURE__ */ React.createElement("div", { className: `text-right ${i === 5 ? "text-white font-semibold" : "text-slate-700"}` }, i === 5 ? "18" : "\u2014"), /* @__PURE__ */ React.createElement("div", { className: `text-right ${i === 5 ? "text-white font-semibold" : "text-slate-700"}` }, i === 5 ? "138.5" : "\u2014"), /* @__PURE__ */ React.createElement("div", { className: `text-right ${i === 5 ? "text-cyan-400 font-semibold" : "text-slate-700"}` }, i === 5 ? "4443z\u0142" : "\u2014"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 text-[7px] py-[3px] px-1 font-bold mt-0.5", style: { borderTop: "1px solid rgba(255,255,255,0.05)" } }, /* @__PURE__ */ React.createElement("div", { className: "text-white" }, "Total"), /* @__PURE__ */ React.createElement("div", { className: "text-right text-white" }, "18"), /* @__PURE__ */ React.createElement("div", { className: "text-right text-white" }, "138.5"), /* @__PURE__ */ React.createElement("div", { className: "text-right text-cyan-400" }, "4443z\u0142"))));
  }
  function SettingsScreen() {
    const rowBg = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" };
    const rowActive = { background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.25)" };
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full text-white px-3 pt-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[13px] font-bold text-center mb-3 flex-shrink-0" }, "Settings"), [
      { label: "HOURLY RATE", content: /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1 rounded-xl px-3 py-2", style: rowBg }, /* @__PURE__ */ React.createElement("span", { className: "flex-1 font-semibold text-[13px]" }, "31,4"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-0.5 mr-2" }, ["\u25B2", "\u25BC"].map((a) => /* @__PURE__ */ React.createElement("div", { key: a, className: "w-3 h-3 rounded flex items-center justify-center text-[6px] text-slate-400", style: { background: "rgba(255,255,255,0.08)" } }, a))), /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400 font-bold text-[13px]" }, "z\u0142")) },
      { label: "CURRENCY", content: /* @__PURE__ */ React.createElement("div", { className: "flex items-center rounded-xl px-3 py-2", style: rowActive }, /* @__PURE__ */ React.createElement("span", { className: "flex-1 text-cyan-400 text-[10px] font-medium" }, "Polish Zloty"), /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400/50 text-[9px] mr-1" }, "z\u0142 PLN"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500 text-[8px]" }, "\u25BC")) },
      { label: "LANGUAGE", content: /* @__PURE__ */ React.createElement("div", { className: "flex items-center rounded-xl px-3 py-2", style: rowActive }, /* @__PURE__ */ React.createElement("span", { className: "flex-1 text-cyan-400 text-[10px] font-medium" }, "English"), /* @__PURE__ */ React.createElement("span", { className: "text-cyan-400/50 text-[9px] mr-1" }, "EN"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500 text-[8px]" }, "\u25BC")) },
      { label: "THEME", content: /* @__PURE__ */ React.createElement("div", { className: "flex rounded-xl p-0.5", style: rowBg }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 py-1.5 text-center rounded-lg text-[9px] font-semibold text-white", style: { background: "#1a2535" } }, "Dark"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 py-1.5 text-center text-slate-500 text-[9px]" }, "Light")) },
      { label: "CALENDAR SYNC", content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mb-0.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-[6.5px] text-green-400 font-semibold" }, "SYNCED"))), /* @__PURE__ */ React.createElement("div", { className: "flex rounded-xl p-0.5", style: rowBg }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 py-1.5 text-center text-slate-500 text-[9px]" }, "Off"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 py-1.5 text-center rounded-lg text-[9px] font-semibold text-white", style: { background: "#1a2535" } }, "On"))) },
      { label: "EXPORT DATA", content: /* @__PURE__ */ React.createElement("div", { className: "rounded-xl px-3 py-2.5 text-center", style: rowBg }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-[10px] font-semibold" }, "Full backup (JSON)")) }
    ].map(({ label, content }) => /* @__PURE__ */ React.createElement("div", { key: label, className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[6.5px] text-slate-500 uppercase tracking-[0.15em] mb-1" }, label), content)));
  }
  function ProfileScreen() {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full text-white items-center px-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-1 rounded-full bg-white/20 mt-2 mb-3 flex-shrink-0" }), /* @__PURE__ */ React.createElement("div", { className: "text-[13px] font-bold mb-4 flex-shrink-0" }, "Profile"), /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-full mb-3 flex-shrink-0 flex items-center justify-center overflow-hidden", style: { background: "linear-gradient(135deg,#6d28d9,#1e3a5f)", border: "2px solid rgba(255,255,255,0.12)" } }, /* @__PURE__ */ React.createElement("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "11", r: "7", fill: "#334155" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "16", cy: "25", rx: "11", ry: "7", fill: "#334155" }))), /* @__PURE__ */ React.createElement("div", { className: "text-[12px] font-bold mb-0.5 text-center" }, "Vladyslv Shuldik (Seamori)"), /* @__PURE__ */ React.createElement("div", { className: "text-[9px] text-slate-400 mb-1.5" }, "suldikvlad04@gmail.com"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 mb-5 flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px] text-green-400 font-medium" }, "Synced")), /* @__PURE__ */ React.createElement("div", { className: "w-full rounded-xl p-2 flex-shrink-0", style: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" } }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-5 gap-1" }, ["EN", "RU", "PL", "UK", "DE", "FR", "ES", "TR", "IT", "KK"].map((l) => /* @__PURE__ */ React.createElement("div", { key: l, className: "rounded-lg py-1.5 text-center text-[9px] font-semibold", style: l === "EN" ? { background: "#2563eb", color: "white" } : { background: "rgba(255,255,255,0.05)", color: "#64748b" } }, l)))), /* @__PURE__ */ React.createElement("div", { className: "mt-auto pb-3 w-full flex-shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-xl py-3 text-center text-[11px] font-semibold", style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171" } }, "Sign out")));
  }
  function Badge({ label, value, top, left, right, delay: delay2 = 0 }) {
    return /* @__PURE__ */ React.createElement(
      motion.div,
      {
        animate: { y: [0, -6, 0] },
        transition: { duration: 3.5 + delay2 * 0.5, repeat: Infinity, ease: "easeInOut", delay: delay2 },
        className: "absolute hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl",
        style: { top, left, right, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", zIndex: 10 }
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400" }, label), /* @__PURE__ */ React.createElement("span", { className: "text-[12px] font-bold text-white" }, value))
    );
  }
  function FeatureRow({ feature }) {
    const ref = (0, import_react28.useRef)(null);
    const inView2 = useInView(ref, { once: true, margin: "-10% 0px" });
    const { phoneRight } = feature;
    const textAnim = { hidden: { opacity: 0, x: phoneRight ? -40 : 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: ease2 } } };
    const phoneAnim = { hidden: { opacity: 0, x: phoneRight ? 40 : -40, y: 16 }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.85, delay: 0.12, ease: ease2 } } };
    const listAnim = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } };
    const itemAnim = { hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: ease2 } } };
    const TextSide = () => /* @__PURE__ */ React.createElement(motion.div, { variants: textAnim, initial: "hidden", animate: inView2 ? "show" : "hidden", className: "flex flex-col justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-mono text-blue-400/50" }, feature.num), /* @__PURE__ */ React.createElement("div", { className: "w-px h-3 bg-blue-500/20" }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-semibold tracking-widest text-blue-400 uppercase" }, feature.tag)), /* @__PURE__ */ React.createElement("h3", { className: "text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5" }, feature.headline), /* @__PURE__ */ React.createElement("p", { className: "text-[17px] text-slate-400 leading-relaxed mb-8 max-w-md" }, feature.description), /* @__PURE__ */ React.createElement(motion.ul, { variants: listAnim, initial: "hidden", animate: inView2 ? "show" : "hidden", className: "flex flex-col gap-3" }, feature.points.map((pt) => /* @__PURE__ */ React.createElement(motion.li, { key: pt, variants: itemAnim, className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0", style: { background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" } }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 5l2.5 2.5L8 2", stroke: "#60a5fa", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("span", { className: "text-[15px] text-slate-300" }, pt)))));
    const PhoneSide = () => /* @__PURE__ */ React.createElement(motion.div, { variants: phoneAnim, initial: "hidden", animate: inView2 ? "show" : "hidden", className: "flex justify-center items-center relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: { background: "radial-gradient(ellipse 70% 50% at 50% 85%, rgba(37,99,235,0.15) 0%, transparent 70%)", filter: "blur(20px)" } }), /* @__PURE__ */ React.createElement(PhoneFrame, null, /* @__PURE__ */ React.createElement(feature.Screen, null)), feature.badges.map((b) => /* @__PURE__ */ React.createElement(Badge, { key: b.label, ...b })));
    return /* @__PURE__ */ React.createElement("div", { ref, className: "relative py-20 md:py-28" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: { background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,20,44,0.5) 0%, transparent 70%)" } }), /* @__PURE__ */ React.createElement("div", { className: "relative max-w-7xl mx-auto px-6 md:px-10" }, /* @__PURE__ */ React.createElement("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!phoneRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}` }, /* @__PURE__ */ React.createElement(TextSide, null), /* @__PURE__ */ React.createElement(PhoneSide, null))));
  }
  var FEATURES = [
    {
      num: "01",
      tag: "CALENDAR",
      phoneRight: true,
      headline: "Every shift, perfectly organized.",
      description: "See your entire month at a glance. Days worked, earnings per shift, and planned hours \u2014 all in one clean calendar view.",
      points: ["Monthly calendar with daily earnings", "Planned shifts highlighted separately", "Weekly & monthly totals at a glance"],
      badges: [
        { label: "This month", value: "138.5h", top: "15%", left: "-8%", delay: 0 },
        { label: "Earned in June", value: "4,443 z\u0142", top: "65%", right: "-6%", delay: 1 }
      ],
      Screen: CalendarScreen
    },
    {
      num: "02",
      tag: "ANALYTICS",
      phoneRight: false,
      headline: "Know exactly what you earn.",
      description: "Visual charts and monthly breakdowns let you spot trends instantly. Switch between hours and earnings with one tap.",
      points: ["Annual overview by month", "Hours and earnings comparison", "Export your data anytime"],
      badges: [
        { label: "Annual hours", value: "138.5h", top: "20%", right: "-7%", delay: 0.5 },
        { label: "Total 2026", value: "4,443 z\u0142", top: "65%", left: "-6%", delay: 1.2 }
      ],
      Screen: StatsScreen
    },
    {
      num: "03",
      tag: "SETTINGS",
      phoneRight: true,
      headline: "Set up in 30 seconds.",
      description: "Enter your rate, pick your currency and language \u2014 and you're done. Shiftly adapts to how you work.",
      points: ["Hourly rate with any currency", "Multi-language interface", "Dark and light theme"],
      badges: [
        { label: "Your rate", value: "31.4 z\u0142/hr", top: "18%", left: "-8%", delay: 0 },
        { label: "Languages", value: "10 supported", top: "70%", right: "-6%", delay: 0.8 }
      ],
      Screen: SettingsScreen
    },
    {
      num: "04",
      tag: "SYNC",
      phoneRight: false,
      headline: "Your shifts on every device.",
      description: "Cloud sync keeps all your data safe and up to date. Google Calendar automatically reflects every shift you log.",
      points: ["Real-time cloud backup", "Google Calendar integration", "Works on iOS, Android & Web"],
      badges: [
        { label: "Status", value: "\u25CF Live sync", top: "22%", right: "-7%", delay: 0.3 },
        { label: "Platforms", value: "iOS \xB7 Android \xB7 Web", top: "68%", left: "-5%", delay: 1 }
      ],
      Screen: ProfileScreen
    }
  ];
  function InteractiveShowcase() {
    const titleRef = (0, import_react28.useRef)(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-10%" });
    return /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-0 inset-y-0 w-px pointer-events-none hidden xl:block", style: { background: "linear-gradient(to bottom,transparent,rgba(59,130,246,0.07) 15%,rgba(59,130,246,0.07) 85%,transparent)" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute right-0 inset-y-0 w-px pointer-events-none hidden xl:block", style: { background: "linear-gradient(to bottom,transparent,rgba(59,130,246,0.07) 15%,rgba(59,130,246,0.07) 85%,transparent)" } }), /* @__PURE__ */ React.createElement("div", { ref: titleRef, className: "max-w-4xl mx-auto px-6 text-center pt-24 pb-4" }, /* @__PURE__ */ React.createElement(motion.div, { initial: { opacity: 0, y: 24 }, animate: titleInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.7, ease: ease2 } }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[11px] font-semibold text-blue-400 tracking-widest uppercase", style: { background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" } }, "Features"), /* @__PURE__ */ React.createElement("h2", { className: "text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5" }, "Every feature,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent" }, "beautifully designed.")), /* @__PURE__ */ React.createElement("p", { className: "text-[18px] text-slate-400 max-w-2xl mx-auto leading-relaxed" }, "Built for people who take their work seriously. Clean, fast, and everything you need."))), FEATURES.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: f.num }, i > 0 && /* @__PURE__ */ React.createElement("div", { className: "relative flex items-center justify-center py-6" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 h-px", style: { background: "linear-gradient(to right,transparent,rgba(255,255,255,0.05) 30%,rgba(255,255,255,0.05) 70%,transparent)" } }), /* @__PURE__ */ React.createElement("div", { className: "relative w-1.5 h-1.5 rounded-full", style: { background: "rgba(59,130,246,0.4)", boxShadow: "0 0 10px rgba(59,130,246,0.5)" } })), /* @__PURE__ */ React.createElement(FeatureRow, { feature: f }))));
  }

  // shiftly-marketing/components/Platforms.tsx
  init_define_import_meta_env();
  var platforms = [
    {
      name: "Windows",
      type: "Desktop App",
      description: "Full-featured desktop experience with system tray integration, native notifications, and offline support.",
      icon: /* @__PURE__ */ React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "4", width: "19", height: "19", rx: "2", fill: "#60a5fa" }), /* @__PURE__ */ React.createElement("rect", { x: "25", y: "4", width: "19", height: "19", rx: "2", fill: "#60a5fa", opacity: "0.8" }), /* @__PURE__ */ React.createElement("rect", { x: "4", y: "25", width: "19", height: "19", rx: "2", fill: "#60a5fa", opacity: "0.8" }), /* @__PURE__ */ React.createElement("rect", { x: "25", y: "25", width: "19", height: "19", rx: "2", fill: "#60a5fa", opacity: "0.6" })),
      badge: "Available",
      version: "v2.4.1"
    },
    {
      name: "Android",
      type: "Mobile App",
      description: "Native Android app with widget support, background tracking, and Google Calendar integration.",
      icon: /* @__PURE__ */ React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M8 32C8 35.3 10.7 38 14 38H16V44C16 45.7 17.3 47 19 47C20.7 47 22 45.7 22 44V38H26V44C26 45.7 27.3 47 29 47C30.7 47 32 45.7 32 44V38H34C37.3 38 40 35.3 40 32V18H8V32Z", fill: "#60a5fa" }), /* @__PURE__ */ React.createElement("path", { d: "M4 18C4 19.7 5.3 21 7 21C8.7 21 10 19.7 10 18V9C10 7.3 8.7 6 7 6C5.3 6 4 7.3 4 9V18Z", fill: "#60a5fa", opacity: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M44 18C44 19.7 42.7 21 41 21C39.3 21 38 19.7 38 18V9C38 7.3 39.3 6 41 6C42.7 6 44 7.3 44 9V18Z", fill: "#60a5fa", opacity: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M14 5.5L12 2M34 5.5L36 2", stroke: "#60a5fa", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M14 14C14 13.4 14.4 13 15 13C15.6 13 16 13.4 16 14C16 14.6 15.6 15 15 15C14.4 15 14 14.6 14 14ZM32 14C32 13.4 32.4 13 33 13C33.6 13 34 13.4 34 14C34 14.6 33.6 15 33 15C32.4 15 32 14.6 32 14Z", fill: "white" }), /* @__PURE__ */ React.createElement("path", { d: "M16 2h16v14H16z", fill: "#60a5fa", opacity: "0.3" }), /* @__PURE__ */ React.createElement("rect", { x: "16", y: "2", width: "16", height: "14", rx: "1", fill: "none", stroke: "#60a5fa", strokeWidth: "0.5" })),
      badge: "Available",
      version: "v2.4.0"
    },
    {
      name: "iOS",
      type: "Mobile App",
      description: "Polished iOS app with Shortcuts support, Live Activities, and seamless Apple Calendar integration.",
      icon: /* @__PURE__ */ React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M32 4C32 8.4 28.8 12 24.4 12H22C19.8 12 18 10.2 18 8V4H32Z", fill: "#60a5fa", opacity: "0.6" }), /* @__PURE__ */ React.createElement("rect", { x: "12", y: "10", width: "24", height: "34", rx: "4", fill: "#60a5fa", opacity: "0.15", stroke: "#60a5fa", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M24 18v6l4 2", stroke: "#60a5fa", strokeWidth: "1.5", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M17 32h14", stroke: "#60a5fa", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.5" }), /* @__PURE__ */ React.createElement("path", { d: "M17 36h10", stroke: "#60a5fa", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.3" }), /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "6", stroke: "#60a5fa", strokeWidth: "1.5" })),
      badge: "Available",
      version: "v2.3.8"
    },
    {
      name: "Web",
      type: "Browser App",
      description: "Access Shiftly from any browser. No install required \u2014 full functionality with cloud sync.",
      icon: /* @__PURE__ */ React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "18", stroke: "#60a5fa", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "24", cy: "24", rx: "8", ry: "18", stroke: "#60a5fa", strokeWidth: "1.5", opacity: "0.6" }), /* @__PURE__ */ React.createElement("path", { d: "M6 24h36", stroke: "#60a5fa", strokeWidth: "1.5", opacity: "0.5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 16h32M8 32h32", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.3" })),
      badge: "Available",
      version: "v2.4.1"
    }
  ];
  var containerVariants2 = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };
  var cardVariants2 = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };
  function Platforms() {
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 px-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
        className: "text-center mb-20"
      },
      /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "1", y: "1", width: "4", height: "4", rx: "0.5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("rect", { x: "7", y: "1", width: "4", height: "4", rx: "0.5", fill: "currentColor", opacity: "0.7" }), /* @__PURE__ */ React.createElement("rect", { x: "1", y: "7", width: "4", height: "4", rx: "0.5", fill: "currentColor", opacity: "0.7" }), /* @__PURE__ */ React.createElement("rect", { x: "7", y: "7", width: "4", height: "4", rx: "0.5", fill: "currentColor", opacity: "0.5" })), "All platforms"),
      /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" }, "Works everywhere you work"),
      /* @__PURE__ */ React.createElement("p", { className: "text-lg text-slate-400 max-w-2xl mx-auto" }, "One account, all your devices. Your data stays in sync no matter where you clock in.")
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        variants: containerVariants2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      },
      platforms.map((platform) => /* @__PURE__ */ React.createElement(
        motion.div,
        {
          key: platform.name,
          variants: cardVariants2,
          whileHover: {
            y: -8,
            transition: { duration: 0.2 }
          },
          className: "group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default flex flex-col"
        },
        /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, platform.icon),
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" }), /* @__PURE__ */ React.createElement("span", { className: "text-green-400 text-xs font-medium" }, platform.badge), /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 text-xs ml-auto" }, platform.version)),
        /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300" }, platform.name),
        /* @__PURE__ */ React.createElement("div", { className: "text-blue-400/70 text-xs font-medium mb-3 uppercase tracking-wide" }, platform.type),
        /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-sm leading-relaxed flex-1" }, platform.description),
        /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-5 border-t border-white/5" }, /* @__PURE__ */ React.createElement("button", { className: "w-full py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] text-sm font-medium transition-all duration-200 group-hover:border-blue-500/20" }, "Download"))
      ))
    )));
  }

  // shiftly-marketing/components/Stats.tsx
  init_define_import_meta_env();
  var import_react29 = __toESM(require_react_shim());
  var stats = [
    {
      prefix: "",
      value: 5e4,
      suffix: "+",
      label: "Shifts tracked daily",
      description: "Across all platforms worldwide",
      decimals: 0
    },
    {
      prefix: "$",
      value: 2.4,
      suffix: "M+",
      label: "Salaries calculated",
      description: "Total earnings tracked by users",
      decimals: 1
    },
    {
      prefix: "",
      value: 98,
      suffix: "%",
      label: "User satisfaction",
      description: "Based on in-app surveys",
      decimals: 0
    },
    {
      prefix: "",
      value: 4.9,
      suffix: "\u2605",
      label: "App store rating",
      description: "Average across all platforms",
      decimals: 1
    }
  ];
  function useCountUp(target, decimals, isInView, duration = 2e3) {
    const [count, setCount] = (0, import_react29.useState)(0);
    const startTime = (0, import_react29.useRef)(null);
    const animRef = (0, import_react29.useRef)(0);
    (0, import_react29.useEffect)(() => {
      if (!isInView) return;
      startTime.current = null;
      const animate = (timestamp) => {
        if (!startTime.current) startTime.current = timestamp;
        const elapsed = timestamp - startTime.current;
        const progress2 = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress2, 3);
        setCount(parseFloat((eased * target).toFixed(decimals)));
        if (progress2 < 1) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      animRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animRef.current);
    }, [isInView, target, decimals, duration]);
    return count;
  }
  function StatCard({ stat, index }) {
    const ref = (0, import_react29.useRef)(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useCountUp(stat.value, stat.decimals, isInView);
    const displayValue = stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.floor(count).toLocaleString();
    return /* @__PURE__ */ React.createElement(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
        className: "flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl group hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300"
      },
      /* @__PURE__ */ React.createElement("div", { className: "text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3 tabular-nums leading-none" }, stat.prefix, displayValue, stat.suffix),
      /* @__PURE__ */ React.createElement("div", { className: "text-white font-semibold text-lg mb-1.5" }, stat.label),
      /* @__PURE__ */ React.createElement("div", { className: "text-slate-500 text-sm" }, stat.description)
    );
  }
  function Stats() {
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 px-6 relative overflow-hidden" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto relative" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-20"
      },
      /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 9l3-4 2.5 2 3-5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })), "By the numbers"),
      /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" }, "Trusted by professionals worldwide"),
      /* @__PURE__ */ React.createElement("p", { className: "text-lg text-slate-400 max-w-xl mx-auto" }, "Real numbers from real users who rely on Shiftly every single day.")
    ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" }, stats.map((stat, index) => /* @__PURE__ */ React.createElement(StatCard, { key: stat.label, stat, index })))));
  }

  // shiftly-marketing/components/Comparison.tsx
  init_define_import_meta_env();
  var features2 = [
    { feature: "Auto hour tracking", shiftly: "yes", excel: "no", paper: "no" },
    { feature: "Salary calculation", shiftly: "yes", excel: "manual", paper: "no" },
    { feature: "Overtime alerts", shiftly: "yes", excel: "no", paper: "no" },
    { feature: "Google Calendar sync", shiftly: "yes", excel: "no", paper: "no" },
    { feature: "Mobile app", shiftly: "yes", excel: "partial", paper: "no" },
    { feature: "Cloud sync", shiftly: "yes", excel: "paid", paper: "no" },
    { feature: "Real-time stats", shiftly: "yes", excel: "no", paper: "no" }
  ];
  function Check() {
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-7 h-7 rounded-full bg-green-500/15 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2.5 7l3.5 3.5L11.5 3.5", stroke: "#4ade80", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))));
  }
  function Cross() {
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3l6 6M9 3l-6 6", stroke: "#475569", strokeWidth: "1.5", strokeLinecap: "round" }))));
  }
  function Partial({ label }) {
    const colorMap = {
      manual: "#f59e0b",
      partial: "#f97316",
      paid: "#a78bfa"
    };
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "text-xs font-semibold px-2.5 py-1 rounded-full",
        style: {
          color: colorMap[label] ?? "#94a3b8",
          background: `${colorMap[label] ?? "#94a3b8"}18`
        }
      },
      label.charAt(0).toUpperCase() + label.slice(1)
    ));
  }
  function CellValue({ value }) {
    if (value === "yes") return /* @__PURE__ */ React.createElement(Check, null);
    if (value === "no") return /* @__PURE__ */ React.createElement(Cross, null);
    return /* @__PURE__ */ React.createElement(Partial, { label: value });
  }
  function Comparison() {
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 px-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-20"
      },
      /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 6h8M6 2v8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })), "Why Shiftly"),
      /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" }, "The clear choice for tracking"),
      /* @__PURE__ */ React.createElement("p", { className: "text-lg text-slate-400 max-w-xl mx-auto" }, "Stop juggling spreadsheets and paper. See why thousands switched to Shiftly.")
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "overflow-hidden rounded-2xl border border-white/[0.08]"
      },
      /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 bg-white/[0.02] border-b border-white/[0.08]" }, /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 text-sm font-semibold text-slate-400" }, "Feature"), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 text-center border-x border-blue-500/30 bg-blue-500/8 relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center gap-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5.5 1L2 6h3.5L4.5 9l4-5H5l.5-3z", fill: "white" }))), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-sm" }, "Shiftly")), /* @__PURE__ */ React.createElement("div", { className: "text-blue-400/60 text-[10px] mt-0.5" }, "Recommended")), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-slate-300 font-semibold text-sm" }, "Excel"), /* @__PURE__ */ React.createElement("div", { className: "text-slate-600 text-[10px] mt-0.5" }, "Spreadsheet")), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-slate-300 font-semibold text-sm" }, "Paper"), /* @__PURE__ */ React.createElement("div", { className: "text-slate-600 text-[10px] mt-0.5" }, "Manual notes"))),
      features2.map((row, index) => /* @__PURE__ */ React.createElement(
        "div",
        {
          key: row.feature,
          className: `grid grid-cols-4 border-b border-white/[0.05] last:border-0 ${index % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"} hover:bg-white/[0.03] transition-colors duration-200`
        },
        /* @__PURE__ */ React.createElement("div", { className: "py-4 px-6 flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-300 text-sm" }, row.feature)),
        /* @__PURE__ */ React.createElement("div", { className: "py-4 px-6 border-x border-blue-500/20 bg-blue-500/[0.04] flex items-center justify-center" }, /* @__PURE__ */ React.createElement(CellValue, { value: row.shiftly })),
        /* @__PURE__ */ React.createElement("div", { className: "py-4 px-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(CellValue, { value: row.excel })),
        /* @__PURE__ */ React.createElement("div", { className: "py-4 px-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(CellValue, { value: row.paper }))
      )),
      /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 bg-white/[0.02] border-t border-white/[0.08]" }, /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6" }), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 border-x border-blue-500/30 bg-blue-500/8 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
        motion.button,
        {
          whileHover: { scale: 1.03, boxShadow: "0 0 25px rgba(59,130,246,0.4)" },
          whileTap: { scale: 0.97 },
          className: "px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-all duration-200"
        },
        "Try Free"
      )), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 text-sm" }, "Complex setup")), /* @__PURE__ */ React.createElement("div", { className: "py-5 px-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 text-sm" }, "Error prone")))
    )));
  }

  // shiftly-marketing/components/Testimonials.tsx
  init_define_import_meta_env();
  var testimonials = [
    {
      quote: "Shiftly changed how I manage my freelance work. I finally know exactly how much I earn per day.",
      name: "Alex M.",
      role: "Freelancer",
      avatar: "AM",
      avatarColor: "from-blue-500 to-indigo-600",
      stars: 5
    },
    {
      quote: "The Google Calendar sync is seamless. I've recommended it to my whole team and everyone loves it.",
      name: "Sarah K.",
      role: "Team Lead",
      avatar: "SK",
      avatarColor: "from-violet-500 to-purple-600",
      stars: 5
    },
    {
      quote: "Best shift tracker I've used in 6 years. The salary calculator alone is worth downloading for.",
      name: "Marcus R.",
      role: "Nurse",
      avatar: "MR",
      avatarColor: "from-emerald-500 to-teal-600",
      stars: 5
    },
    {
      quote: "Finally an app that handles overtime properly. Simple, reliable, and the UI is beautiful.",
      name: "Diana P.",
      role: "Engineer",
      avatar: "DP",
      avatarColor: "from-rose-500 to-pink-600",
      stars: 5
    },
    {
      quote: "I used to track hours in a notebook. Shiftly replaced that completely and I save 30 minutes every week.",
      name: "Tom H.",
      role: "Construction Manager",
      avatar: "TH",
      avatarColor: "from-orange-500 to-amber-600",
      stars: 5
    },
    {
      quote: "The analytics dashboard is incredible. I can see exactly where my time goes each month.",
      name: "Priya N.",
      role: "Consultant",
      avatar: "PN",
      avatarColor: "from-cyan-500 to-blue-600",
      stars: 5
    }
  ];
  function StarRating({ count }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex gap-0.5" }, Array.from({ length: count }).map((_, i) => /* @__PURE__ */ React.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M7 1.5l1.4 3.2 3.4.5-2.4 2.4.6 3.4L7 9.4l-3 1.6.6-3.4L2.2 5.2l3.4-.5L7 1.5z",
        fill: "#fbbf24"
      }
    ))));
  }
  function TestimonialCard({ testimonial }) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 w-80 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 mx-3" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(StarRating, { count: testimonial.stars })), /* @__PURE__ */ React.createElement("p", { className: "text-slate-300 text-sm leading-relaxed italic mb-6" }, "\u201C", testimonial.quote, "\u201D"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`
      },
      testimonial.avatar
    ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-white font-semibold text-sm" }, testimonial.name), /* @__PURE__ */ React.createElement("div", { className: "text-slate-500 text-xs" }, testimonial.role))));
  }
  function Testimonials() {
    const duplicated = [...testimonials, ...testimonials];
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-6 mb-16" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center"
      },
      /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6" }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 5h2l-1-3H2L1 5v4h2V5zm7 0h2l-1-3H9L8 5v4h2V5z", fill: "currentColor", opacity: "0.8" })), "What users say"),
      /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" }, "Loved by shift workers everywhere"),
      /* @__PURE__ */ React.createElement("p", { className: "text-lg text-slate-400 max-w-xl mx-auto" }, "Join thousands of professionals who track their work hours smarter with Shiftly.")
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" }), /* @__PURE__ */ React.createElement("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" }), /* @__PURE__ */ React.createElement("div", { className: "flex scroll-track" }, duplicated.map((t, i) => /* @__PURE__ */ React.createElement(TestimonialCard, { key: `${t.name}-${i}`, testimonial: t })))), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "flex justify-center mt-16"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-1" }, [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ React.createElement("svg", { key: i, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M10 2L12 7.5H17.5L13 11L15 17L10 13.5L5 17L7 11L2.5 7.5H8L10 2Z",
          fill: "#fbbf24"
        }
      )))), /* @__PURE__ */ React.createElement("div", { className: "text-slate-400 text-sm" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-semibold" }, "4.9 out of 5"), " \u2014 based on 2,400+ reviews"))
    ));
  }

  // shiftly-marketing/components/CTA.tsx
  init_define_import_meta_env();
  function CTA() {
    const handleScroll = (href) => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return /* @__PURE__ */ React.createElement("section", { className: "py-32 px-6 relative overflow-hidden" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 grid-overlay opacity-30 pointer-events-none" }), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none",
        "aria-hidden": "true"
      },
      /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "font-black text-blue-500/[0.04] leading-none",
          style: { fontSize: "clamp(200px, 40vw, 400px)" }
        },
        "S"
      )
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none",
        style: {
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(60px)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto relative text-center" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-8"
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" }),
      "Free to get started"
    ), /* @__PURE__ */ React.createElement(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        className: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
      },
      /* @__PURE__ */ React.createElement("span", { className: "text-white" }, "Start tracking your time."),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("span", { className: "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" }, "Today.")
    ), /* @__PURE__ */ React.createElement(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
      },
      "Join over 10,000 professionals who use Shiftly to track hours, calculate salary, and manage their work life with clarity."
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.3 },
        className: "flex flex-wrap gap-4 justify-center mb-16"
      },
      /* @__PURE__ */ React.createElement(
        motion.button,
        {
          whileHover: { scale: 1.04, boxShadow: "0 0 50px rgba(59,130,246,0.6)" },
          whileTap: { scale: 0.96 },
          className: "px-10 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl shadow-electric text-lg transition-all duration-200 flex items-center gap-2"
        },
        /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M10 2L10 14M10 14L6 10M10 14L14 10", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M3 17h14", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        "Download Free"
      ),
      /* @__PURE__ */ React.createElement(
        motion.button,
        {
          whileHover: { scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" },
          whileTap: { scale: 0.96 },
          onClick: () => handleScroll("#features"),
          className: "px-10 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-lg transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
        },
        /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "10", cy: "10", r: "8", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M10 6v4l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })),
        "Open Web App"
      )
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.45 },
        className: "flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M8 1.5L10 5.5L14 6L11 9L12 13L8 11L4 13L5 9L2 6L6 5.5L8 1.5Z", fill: "#4ade80", opacity: "0.7" })), /* @__PURE__ */ React.createElement("span", null, "No credit card required")),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "7", width: "10", height: "7", rx: "1.5", stroke: "#60a5fa", strokeWidth: "1.2", opacity: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M5.5 7V5a2.5 2.5 0 0 1 5 0v2", stroke: "#60a5fa", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.7" })), /* @__PURE__ */ React.createElement("span", null, "Privacy first \u2014 your data stays yours")),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8l3.5 3.5L13 4.5", stroke: "#4ade80", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.7" })), /* @__PURE__ */ React.createElement("span", null, "Free forever plan available"))
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.55 },
        className: "mt-16 pt-12 border-t border-white/5"
      },
      /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 text-sm mb-6 uppercase tracking-widest" }, "Available on"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-8 text-slate-500" }, ["Windows", "Android", "iOS", "Web"].map((platform) => /* @__PURE__ */ React.createElement("div", { key: platform, className: "flex items-center gap-2 hover:text-slate-300 transition-colors duration-200 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400/60" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium" }, platform))))
    )));
  }

  // shiftly-marketing/components/Footer.tsx
  init_define_import_meta_env();
  var footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "#" }
  ];
  function Footer() {
    return /* @__PURE__ */ React.createElement("footer", { className: "border-t border-white/5 py-10 px-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6" }, /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex items-center gap-3"
      },
      /* @__PURE__ */ React.createElement("div", { className: "w-7 h-7 rounded-lg bg-blue-500/80 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M8 1.5L3 8h4.5L5.5 12.5l6-7H8L8 1.5z",
          fill: "white"
        }
      ))),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold" }, "Shiftly"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-600 text-xs ml-2" }, "Track hours. Earn more."))
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.1 },
        className: "flex items-center gap-6"
      },
      footerLinks.map((link) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: link.label,
          href: link.href,
          className: "text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
        },
        link.label
      ))
    ), /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.2 },
        className: "text-slate-600 text-sm"
      },
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Shiftly. All rights reserved."
    ))));
  }
  return __toCommonJS(index_exports);
})();
window.ShiftlyMarketing=ShiftlyMarketing.__dsMainNs?Object.assign({},ShiftlyMarketing,ShiftlyMarketing.__dsMainNs,{__dsMainNs:undefined}):ShiftlyMarketing;
