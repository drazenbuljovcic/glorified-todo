webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(27);
	
	var _reactRedux = __webpack_require__(41);
	
	var _store = __webpack_require__(162);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _routes = __webpack_require__(161);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(167);
	__webpack_require__(84);
	
	console.clear();
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: (0, _store2.default)() },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _routes2.default
	  )
	), document);

/***/ },

/***/ 16:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTIONS = {
	  CHANGE_ROUTE: 'CHANGE_ROUTE',
	  SET_ADD_EVENT_INDICATOR: 'SET_ADD_EVENT_INDICATOR',
	  SET_DELETE_EVENT: 'SET_DELETE_EVENT'
	};
	
	exports.default = {
	  changeRoute: function changeRoute(route) {
	    return {
	      type: ACTIONS.CHANGE_ROUTE,
	      payload: route
	    };
	  },
	  setAddEventIndicator: function setAddEventIndicator(indicator) {
	    return {
	      type: ACTIONS.SET_ADD_EVENT_INDICATOR,
	      payload: indicator
	    };
	  },
	  setDeleteEvent: function setDeleteEvent(indicator, eventId) {
	    return {
	      type: ACTIONS.SET_DELETE_EVENT,
	      payload: {
	        indicator: indicator,
	        eventId: eventId
	      }
	    };
	  }
	};

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddEvent = function (_React$Component) {
	  _inherits(AddEvent, _React$Component);
	
	  function AddEvent(props, context) {
	    _classCallCheck(this, AddEvent);
	
	    return _possibleConstructorReturn(this, (AddEvent.__proto__ || Object.getPrototypeOf(AddEvent)).call(this, props, context));
	  }
	
	  _createClass(AddEvent, [{
	    key: 'setAddEventIndicator',
	    value: function setAddEventIndicator(e, indicator) {
	      if (this.overlayDiv === e.target) {
	        this.props.dispatch(_helperActions2.default.setAddEventIndicator(indicator));
	      }
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent(e) {
	      e.preventDefault();
	      console.log('add');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(overlayDiv) {
	            return _this2.overlayDiv = overlayDiv;
	          },
	          onClick: function onClick(e) {
	            return _this2.setAddEventIndicator(e, false);
	          },
	          className: 'overlay wrapper flex flex--center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'add-form' },
	          _react2.default.createElement(
	            'form',
	            {
	              onSubmit: function onSubmit(e) {
	                return _this2.addEvent(e);
	              },
	              className: 'flex flex--column items-stretch' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Add New Event'
	            ),
	            _react2.default.createElement(
	              'label',
	              { 'for': 'eventHeadline' },
	              'eventHeadline'
	            ),
	            _react2.default.createElement('input', { type: 'text', placeholder: 'Event Headline',
	              id: 'eventHeadline',
	              ref: function ref(eventHeadline) {
	                return _this2.eventHeadline = eventHeadline;
	              }, required: true }),
	            _react2.default.createElement('textarea', { placeholder: 'Event Description',
	              ref: function ref(eventDescription) {
	                return _this2.eventDescription = eventDescription;
	              }, required: true }),
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'ADD'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return AddEvent;
	}(_react2.default.Component);
	
	exports.default = AddEvent;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AsideNav = function (_React$Component) {
	  _inherits(AsideNav, _React$Component);
	
	  function AsideNav() {
	    _classCallCheck(this, AsideNav);
	
	    return _possibleConstructorReturn(this, (AsideNav.__proto__ || Object.getPrototypeOf(AsideNav)).apply(this, arguments));
	  }
	
	  _createClass(AsideNav, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'aside',
	        { className: 'user-panel' },
	        _react2.default.createElement(
	          'figure',
	          { className: 'user-greeting flex flex--row flex--center' },
	          _react2.default.createElement('img', { className: 'user-avatar self--center', alt: 'user avatar' }),
	          _react2.default.createElement(
	            'figcaption',
	            { className: 'greeting-text lighten-font' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Hello'
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.userFirstName
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'nav',
	          null,
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/dashboard', activeClassName: 'active' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Dashboard'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/week', activeClassName: 'active' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'My Week'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/deadlines', activeClassName: 'active' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Deadlines'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/grades', activeClassName: 'active' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Grades'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/notes', activeClassName: 'active' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Notes'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return AsideNav;
	}(_react2.default.Component);
	
	exports.default = AsideNav;

/***/ },

/***/ 36:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTIONS = {
	  'SHOW_EVENT_DETAILS': 'SHOW_EVENT_DETAILS',
	  'DELETE_EVENT_ANSWER': 'DELETE_EVENT_ANSWER'
	};
	
	exports.default = {
	  showEventDetails: function showEventDetails(event) {
	    return {
	      type: ACTIONS.SHOW_EVENT_DETAILS,
	      payload: event
	    };
	  },
	  deleteEventAnswer: function deleteEventAnswer(answer) {
	    return {
	      type: ACTIONS.DELETE_EVENT_ANSWER,
	      payload: answer
	    };
	  }
	};

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventActions = __webpack_require__(36);
	
	var _eventActions2 = _interopRequireDefault(_eventActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventDetails = function (_React$Component) {
	  _inherits(EventDetails, _React$Component);
	
	  function EventDetails(props, context) {
	    _classCallCheck(this, EventDetails);
	
	    return _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props, context));
	  }
	
	  _createClass(EventDetails, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'event-details flex flex--column items--end' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Event details'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.event.eventHeadline
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Name'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.event.eventDesc
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Description'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event-duration flex' },
	          _react2.default.createElement(
	            'div',
	            { className: 'event-start' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.event.fullStartTime
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              'Start'
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '-'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-end' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.event.end
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              'End'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return EventDetails;
	}(_react2.default.Component);
	
	exports.default = EventDetails;

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { id: "main", className: "below-header" },
	        _react2.default.cloneElement(this.props.children, this.props)
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	exports.default = Main;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialAuth = function (_React$Component) {
	  _inherits(SocialAuth, _React$Component);
	
	  function SocialAuth() {
	    _classCallCheck(this, SocialAuth);
	
	    return _possibleConstructorReturn(this, (SocialAuth.__proto__ || Object.getPrototypeOf(SocialAuth)).call(this));
	  }
	
	  _createClass(SocialAuth, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "aside",
	        { className: "signup-social social-auth flexible flex flex--center flex--column" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn width-100 btn-fb" },
	          "Signin with Facebook"
	        ),
	        _react2.default.createElement(
	          "button",
	          { className: "btn width-100 btn-gplus" },
	          "Signin with Google+"
	        )
	      );
	    }
	  }]);
	
	  return SocialAuth;
	}(_react2.default.Component);
	
	exports.default = SocialAuth;

/***/ },

/***/ 83:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var months = void 0,
	      days = void 0;
	
	  months = [{ 'slug': 'Jan', 'full': 'January' }, { 'slug': 'Feb', 'full': 'February' }, { 'slug': 'Mar', 'full': 'March' }, { 'slug': 'Apr', 'full': 'April' }, { 'slug': 'May', 'full': 'May' }, { 'slug': 'Jun', 'full': 'June' }, { 'slug': 'Jul', 'full': 'July' }, { 'slug': 'Aug', 'full': 'August' }, { 'slug': 'Sep', 'full': 'September' }, { 'slug': 'Oct', 'full': 'October' }, { 'slug': 'Nov', 'full': 'November' }, { 'slug': 'Dec', 'full': 'December' }];
	
	  days = [{ 'slug': 'Mon', 'full': 'Monday' }, { 'slug': 'Tue', 'full': 'Tuesday' }, { 'slug': 'Wed', 'full': 'Wednesday' }, { 'slug': 'Thu', 'full': 'Thursday' }, { 'slug': 'Fri', 'full': 'Friday' }, { 'slug': 'Sat', 'full': 'Saturday' }, { 'slug': 'Sun', 'full': 'Sunday' }];
	
	  return {
	    normalizeMonth: function normalizeMonth(monthNum) {
	      //expecting numbers from 1 to 12
	      return months[--monthNum];
	    },
	    normalizeDay: function normalizeDay(dayNum) {
	      //expecting numbers from 1 to 7
	      return days[--dayNum];
	    },
	    sliceObjectFromArrayByIdFilter: function sliceObjectFromArrayByIdFilter(arr, objId, filter) {
	      var objIndex = arr.findIndex(function (obj) {
	        return obj[objId] === filter;
	      });
	      return arr.slice(0, objIndex).concat(arr.slice(objIndex + 1));
	    }
	  };
	}();

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(27);
	
	var _reactRedux = __webpack_require__(41);
	
	var _promisePolyfill = __webpack_require__(99);
	
	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
	
	var _jquery = __webpack_require__(97);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Header = __webpack_require__(150);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Main = __webpack_require__(81);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props, context) {
	    _classCallCheck(this, Page);
	
	    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));
	
	    _this.state = {
	      devReload: false,
	      devScriptInjected: false
	    };
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.env === 'dev-hmr') console.log("Hot Module Reload enabled.");
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!window.Promise) {
	        window.Promise = _promisePolyfill2.default;
	      }
	      console.log('Page rendered in ' + this.props.env + ' mode!');
	
	      if (this.props.env === 'development') this.setState({ devReload: true });
	    }
	  }, {
	    key: 'maybeInjectDevelopmentReloadScript',
	    value: function maybeInjectDevelopmentReloadScript() {
	      var _this2 = this;
	
	      if (this.state.devReload && !this.state.devScriptInjected) {
	        // return <script src='/reload/reload.js' />;
	        var s = document.createElement('script');
	        s.setAttribute('src', '/reload/reload.js');
	        document.body.appendChild(s);
	
	        s.onload = function () {
	          _this2.setState({ devScriptInjected: true });
	          console.log('Development mode with autoreload.');
	        };
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'html',
	        { lang: 'en', dir: 'ltr' },
	        _react2.default.createElement(
	          'head',
	          null,
	          _react2.default.createElement(
	            'title',
	            null,
	            'Glorified ToDo list'
	          ),
	          _react2.default.createElement('meta', { charSet: 'utf-8' }),
	          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0, minimum-scale=1.0' }),
	          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/app.bundle.css' })
	        ),
	        _react2.default.createElement(
	          'body',
	          { ref: function ref(body) {
	              return _this3.bodyDOM = body;
	            } },
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper' },
	            _react2.default.createElement(_Header2.default, {
	              user: this.props.user,
	              route: this.props.route,
	              dispatch: this.props.dispatch,
	              addEventIndicator: this.props.indicators.addEventIndicator
	            }),
	            _react2.default.createElement(_Main2.default, _extends({
	              children: this.props.children
	            }, this.props))
	          ),
	          _react2.default.createElement('script', { src: '/vendor.bundle.js' }),
	          _react2.default.createElement('script', { src: '/app.bundle.js' }),
	          this.maybeInjectDevelopmentReloadScript()
	        )
	      );
	    }
	  }]);
	
	  return Page;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	  return state;
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Page);

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventActions = __webpack_require__(36);
	
	var _eventActions2 = _interopRequireDefault(_eventActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CalendarDayBlock = function (_React$Component) {
	  _inherits(CalendarDayBlock, _React$Component);
	
	  function CalendarDayBlock(props, context) {
	    _classCallCheck(this, CalendarDayBlock);
	
	    return _possibleConstructorReturn(this, (CalendarDayBlock.__proto__ || Object.getPrototypeOf(CalendarDayBlock)).call(this, props, context));
	  }
	
	  _createClass(CalendarDayBlock, [{
	    key: 'eventDetails',
	    value: function eventDetails(eventId) {
	      this.props.dispatch(_eventActions2.default.showEventDetails(eventId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'figure',
	        {
	          'data-month': this.props.monthName,
	          'data-day': this.props.day,
	          'data-weekend': this.props.weekend,
	          className: 'calendar-day-block flexible flex' },
	        _react2.default.createElement(
	          'figcaption',
	          { className: 'day-indicator flex flex--center text-green' },
	          this.props.dayNum
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'day-events flexible flex flex--column items--end' },
	          _react2.default.createElement(
	            'div',
	            { className: 'flexible width-100' },
	            this.props.events.map(function (event) {
	              return _react2.default.createElement('div', {
	                key: 'event-' + event.eventId,
	                'data-priority': event.priority,
	                className: 'event-indicator inline',
	                onClick: function onClick() {
	                  return _this2.eventDetails(event.eventId);
	                } });
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return CalendarDayBlock;
	}(_react2.default.Component);
	
	exports.default = CalendarDayBlock;

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DeleteDashboardEvent = __webpack_require__(148);
	
	var _DeleteDashboardEvent2 = _interopRequireDefault(_DeleteDashboardEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DashboardEvent = function (_React$Component) {
	  _inherits(DashboardEvent, _React$Component);
	
	  function DashboardEvent(props, context) {
	    _classCallCheck(this, DashboardEvent);
	
	    return _possibleConstructorReturn(this, (DashboardEvent.__proto__ || Object.getPrototypeOf(DashboardEvent)).call(this, props, context));
	  }
	
	  _createClass(DashboardEvent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        {
	          className: 'dashboard-event flex relative',
	          'data-priority': this.props.priority },
	        _react2.default.createElement(
	          'div',
	          { className: 'flexible' },
	          _react2.default.createElement(
	            'header',
	            null,
	            _react2.default.createElement(
	              'h2',
	              null,
	              this.props.eventHeadline
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-details flexible' },
	            this.props.eventDesc
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event-duration flex flex--around self--center' },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.day
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              'Day'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-start' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.fullStartTime
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              'Start'
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '-'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-end' },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.end
	            ),
	            _react2.default.createElement(
	              'h4',
	              null,
	              'End'
	            )
	          )
	        ),
	        _react2.default.createElement(_DeleteDashboardEvent2.default, {
	          eventId: this.props.eventId,
	          indicators: this.props.indicators,
	          eventIdentifiers: this.props.eventIdentifiers,
	          dispatch: this.props.dispatch
	        })
	      );
	    }
	  }]);
	
	  return DashboardEvent;
	}(_react2.default.Component);
	
	exports.default = DashboardEvent;

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DeleteEventModal = __webpack_require__(149);
	
	var _DeleteEventModal2 = _interopRequireDefault(_DeleteEventModal);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeleteDashboardEvent = function (_React$Component) {
	  _inherits(DeleteDashboardEvent, _React$Component);
	
	  function DeleteDashboardEvent(props, context) {
	    _classCallCheck(this, DeleteDashboardEvent);
	
	    return _possibleConstructorReturn(this, (DeleteDashboardEvent.__proto__ || Object.getPrototypeOf(DeleteDashboardEvent)).call(this, props, context));
	  }
	
	  _createClass(DeleteDashboardEvent, [{
	    key: 'setDeleteEvent',
	    value: function setDeleteEvent(e, indicator, eventId) {
	      this.props.dispatch(_helperActions2.default.setDeleteEvent(indicator, eventId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'delete-dashboard-event' },
	        _react2.default.createElement('i', {
	          ref: function ref(deleteIndicator) {
	            return _this2.deleteIndicator = deleteIndicator;
	          },
	          onClick: function onClick(e) {
	            return _this2.setDeleteEvent(e, true, _this2.props.eventId);
	          },
	          className: 'fa fa-times', 'aria-hidden': 'true', title: 'Delete Event' }),
	        this.props.eventIdentifiers.deleteEvent === this.props.eventId && this.props.indicators.dashboardDeleteIndicator ? _react2.default.createElement(_DeleteEventModal2.default, {
	          dispatch: this.props.dispatch
	        }) : null
	      );
	    }
	  }]);
	
	  return DeleteDashboardEvent;
	}(_react2.default.Component);
	
	exports.default = DeleteDashboardEvent;

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventActions = __webpack_require__(36);
	
	var _eventActions2 = _interopRequireDefault(_eventActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeleteEventModal = function (_React$Component) {
	  _inherits(DeleteEventModal, _React$Component);
	
	  function DeleteEventModal(props, context) {
	    _classCallCheck(this, DeleteEventModal);
	
	    return _possibleConstructorReturn(this, (DeleteEventModal.__proto__ || Object.getPrototypeOf(DeleteEventModal)).call(this, props, context));
	  }
	
	  _createClass(DeleteEventModal, [{
	    key: 'delete',
	    value: function _delete(answer) {
	      this.props.dispatch(_eventActions2.default.deleteEventAnswer(answer));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'delete-event-modal overlay flex flex--center flex--column' },
	        _react2.default.createElement(
	          'span',
	          { className: 'text-green uppercase' },
	          'Delete Event?'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'delete-question flexible flex flex--around items--stretch' },
	          _react2.default.createElement(
	            'button',
	            {
	              'data-answer': 'yes',
	              className: 'self--center text-white bold-font uppercase',
	              onClick: function onClick() {
	                return _this2.delete(true);
	              } },
	            'Yup'
	          ),
	          _react2.default.createElement(
	            'button',
	            {
	              'data-answer': 'no',
	              className: 'self--center text-white bold-font uppercase',
	              onClick: function onClick() {
	                return _this2.delete(false);
	              } },
	            'Nope'
	          )
	        )
	      );
	    }
	  }]);
	
	  return DeleteEventModal;
	}(_react2.default.Component);
	
	exports.default = DeleteEventModal;

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	var _reactRouter = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header(props, context) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));
	
	    _this.state = {
	      navOpened: false
	    };
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'hideMobileNav',
	    value: function hideMobileNav() {
	      var _this2 = this;
	
	      Promise.resolve(this.setState({ navOpened: false })).then(function () {
	        if (!_this2.state.navOpened) {
	          _this2.nav.classList.remove('active');
	          window.scrollTo(1, 0);
	        }
	      });
	    }
	  }, {
	    key: 'toggleMobileNav',
	    value: function toggleMobileNav() {
	      var _this3 = this;
	
	      Promise.resolve(this.setState({ navOpened: !this.state.navOpened })).then(function () {
	        if (!_this3.state.navOpened) {
	          _this3.nav.classList.remove('active');
	        } else {
	          _this3.nav.classList.add('active');
	        }
	      });
	    }
	  }, {
	    key: 'setAddEventIndicator',
	    value: function setAddEventIndicator(indicator) {
	      if (this.props.addEventIndicator !== indicator) this.props.dispatch(_helperActions2.default.setAddEventIndicator(indicator));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return _react2.default.createElement(
	        'header',
	        { className: 'main-header fixed width-100' },
	        _react2.default.createElement(
	          'div',
	          { className: 'height-100 flexible flex flex--between' },
	          _react2.default.createElement(
	            'h1',
	            { className: 'logo self--center' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              'LOGO'
	            )
	          ),
	          !this.props.user.userLoggedIn ? _react2.default.createElement(
	            'nav',
	            { className: 'self--center' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'signing-links flex self--center', ref: function ref(nav) {
	                  return _this4.nav = nav;
	                } },
	              _react2.default.createElement(
	                'li',
	                { className: 'signing-link link' },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { onClick: function onClick() {
	                      return _this4.hideMobileNav();
	                    }, to: '/auth/signin', activeClassName: 'active' },
	                  _react2.default.createElement(
	                    'button',
	                    { className: 'btn' },
	                    'Sign in'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'signing-link link' },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { onClick: function onClick() {
	                      return _this4.hideMobileNav();
	                    }, to: '/auth/signup', activeClassName: 'active' },
	                  _react2.default.createElement(
	                    'button',
	                    { className: 'btn' },
	                    'Sign up'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement('i', { onClick: function onClick() {
	                return _this4.toggleMobileNav();
	              }, className: 'fa fa-bars mobile-nav-toggle', 'aria-hidden': 'true' })
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'flexible flex' },
	            _react2.default.createElement(
	              'h2',
	              { className: 'route-name flexible self--center text-white lighten-font center-text uppercase' },
	              this.props.route
	            ),
	            _react2.default.createElement('i', {
	              onClick: function onClick() {
	                return _this4.setAddEventIndicator(true);
	              },
	              className: 'new-event self--center text-white fa fa-calendar-plus-o', 'aria-hidden': 'true' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventActions = __webpack_require__(36);
	
	var _eventActions2 = _interopRequireDefault(_eventActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyWeekEvent = function (_React$Component) {
	  _inherits(MyWeekEvent, _React$Component);
	
	  function MyWeekEvent(props, context) {
	    _classCallCheck(this, MyWeekEvent);
	
	    return _possibleConstructorReturn(this, (MyWeekEvent.__proto__ || Object.getPrototypeOf(MyWeekEvent)).call(this, props, context));
	  }
	
	  _createClass(MyWeekEvent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      Object.assign(this.eventDiv.style, {
	        'height': this.props.durationInMin * this.props.minuteInPixels,
	        'top': this.calculateStartingPoint(this.props.timeOfDay, this.props.hour, this.props.startInMin)
	      });
	    }
	  }, {
	    key: 'calculateStartingPoint',
	    value: function calculateStartingPoint(timeOfDay, hour, startInMin) {
	      //set child top position
	      var top = 54; //default starting point
	
	      if (timeOfDay === 'PM') {
	        // 720
	        return top += this.props.hourInMinutes * this.props.minuteInPixels * 4 + startInMin * this.props.minuteInPixels;
	      }
	      if (timeOfDay === 'AM' && hour >= 8) {
	        // - 1440
	        return top += -this.props.hourInMinutes * this.props.minuteInPixels * 8 + startInMin * this.props.minuteInPixels;
	      }
	      if (timeOfDay === 'AM' && hour <= 7) {
	        // 2880
	        return top += this.props.hourInMinutes * this.props.minuteInPixels * 16 + startInMin * this.props.minuteInPixels;
	      }
	
	      return top;
	    }
	  }, {
	    key: 'eventDetails',
	    value: function eventDetails(dispatch, eventId) {
	      dispatch(_eventActions2.default.showEventDetails(eventId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'section',
	        {
	          ref: function ref(eventDiv) {
	            return _this2.eventDiv = eventDiv;
	          },
	          onClick: function onClick() {
	            return _this2.eventDetails(_this2.props.dispatch, _this2.props.eventId);
	          },
	          id: 'event-' + this.props.eventId,
	          className: 'day-event absolute width-100 flex flex--column',
	          'data-priority': this.props.priority },
	        _react2.default.createElement(
	          'header',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            this.props.eventHeadline
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event-details flexible' },
	          this.props.eventDesc
	        )
	      );
	    }
	  }]);
	
	  return MyWeekEvent;
	}(_react2.default.Component);
	
	exports.default = MyWeekEvent;

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(41);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	var _AsideNav = __webpack_require__(30);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _DashboardEvent = __webpack_require__(147);
	
	var _DashboardEvent2 = _interopRequireDefault(_DashboardEvent);
	
	var _AddEvent = __webpack_require__(29);
	
	var _AddEvent2 = _interopRequireDefault(_AddEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props, context) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props, context));
	
	    _this.state = {
	      tabActive: 'none'
	    };
	    return _this;
	  }
	
	  _createClass(Dashboard, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch(_helperActions2.default.changeRoute('Dashboard'));
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      //in a component re-render remove box shadow from all tabs
	      //and add it just to the active one
	      Array.prototype.map.call(document.querySelectorAll('li[data-priority]'), function (obj) {
	        return obj.style = "";
	      });
	      document.querySelector('li[data-priority=' + nextState.tabActive + ']').style.boxShadow = 'none';
	    }
	  }, {
	    key: 'FilterByPriorityAndRenderEvents',
	    value: function FilterByPriorityAndRenderEvents(events, priority) {
	      var _this2 = this;
	
	      return events.filter(function (event) {
	        return event.priority === priority;
	      }).map(function (event) {
	        return _this2.renderEvent(event);
	      });
	    }
	  }, {
	    key: 'renderEvent',
	    value: function renderEvent(event) {
	      return _react2.default.createElement(_DashboardEvent2.default, _extends({
	        dispatch: this.props.dispatch,
	        key: event.eventId,
	        indicators: this.props.indicators,
	        eventIdentifiers: this.props.eventIdentifiers
	      }, event));
	    }
	  }, {
	    key: 'switchTab',
	    value: function switchTab(priority) {
	      //set state which triggers component re-render
	      this.setState({ tabActive: priority });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'section',
	        { className: 'dashboard-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--column flex--center relative' },
	          _react2.default.createElement(
	            'dialog',
	            { className: 'dashboard-modal flex flex--column relative' },
	            _react2.default.createElement(
	              'header',
	              { className: 'dashboard-modal-header' },
	              _react2.default.createElement(
	                'ul',
	                { className: 'task-priorities flex flexible height-100' },
	                _react2.default.createElement(
	                  'li',
	                  { 'data-priority': 'none',
	                    onClick: function onClick() {
	                      return _this3.switchTab('none');
	                    },
	                    className: 'task-priority flexible' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'priority-none' },
	                    'None'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { 'data-priority': 'high',
	                    onClick: function onClick() {
	                      return _this3.switchTab('high');
	                    },
	                    className: 'task-priority flexible' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'priority-high' },
	                    'High'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { 'data-priority': 'medium',
	                    onClick: function onClick() {
	                      return _this3.switchTab('medium');
	                    },
	                    className: 'task-priority flexible' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'priority-medium' },
	                    'Medium'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { 'data-priority': 'low',
	                    onClick: function onClick() {
	                      return _this3.switchTab('low');
	                    },
	                    className: 'task-priority flexible' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'priority-low' },
	                    'Low'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'section',
	              { className: 'dashboard-modal-content flexible' },
	              this.FilterByPriorityAndRenderEvents(this.props.events, this.state.tabActive)
	            )
	          ),
	          this.props.indicators.addEventIndicator ? _react2.default.createElement(_AddEvent2.default, { dispatch: this.props.dispatch }) : null
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react2.default.Component);
	
	exports.default = Dashboard;

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(30);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _CalendarDayBlock = __webpack_require__(146);
	
	var _CalendarDayBlock2 = _interopRequireDefault(_CalendarDayBlock);
	
	var _EventDetails = __webpack_require__(80);
	
	var _EventDetails2 = _interopRequireDefault(_EventDetails);
	
	var _AddEvent = __webpack_require__(29);
	
	var _AddEvent2 = _interopRequireDefault(_AddEvent);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	var _helpers = __webpack_require__(83);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Deadlines = function (_React$Component) {
	  _inherits(Deadlines, _React$Component);
	
	  function Deadlines(props, context) {
	    _classCallCheck(this, Deadlines);
	
	    return _possibleConstructorReturn(this, (Deadlines.__proto__ || Object.getPrototypeOf(Deadlines)).call(this, props, context));
	  }
	
	  _createClass(Deadlines, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch(_helperActions2.default.changeRoute('Deadlines'));
	    }
	  }, {
	    key: 'printCalendar',
	    value: function printCalendar(numOfDaysInMonth, firstDay, monthName, allEvents) {
	      var content = [];
	
	      //prepend empty divs
	      for (var i = 1; i <= firstDay - 1; i++) {
	        content.push(_react2.default.createElement('figure', {
	          key: 'emptyPrepend-' + i,
	          className: 'calendar-day-block flexible flex' }));
	      }
	
	      //render calendar divs
	      var monthCalendarDay = firstDay;
	      for (var day = 1; day <= numOfDaysInMonth; day++) {
	        var today = void 0;
	        if (monthCalendarDay > 7) monthCalendarDay = 1;
	
	        today = {
	          numOfDayInWeek: monthCalendarDay,
	          numOfDayInMonth: day,
	          slug: _helpers2.default.normalizeDay(monthCalendarDay).slug
	        };
	
	        var daySpecificEvents = this.gatherEvents(allEvents, today.numOfDayInMonth);
	
	        content.push(_react2.default.createElement(_CalendarDayBlock2.default, {
	          monthName: monthName,
	          key: monthName + '-' + day + '-' + today.slug,
	          day: today.slug,
	          dayNum: day,
	          events: daySpecificEvents,
	          dispatch: this.props.dispatch,
	          weekend: true ? today.slug === 'Sat' || today.slug === 'Sun' : ''
	        }));
	
	        monthCalendarDay++;
	      }
	
	      //append empty divs
	      for (var _i = 0; _i < 35 - (numOfDaysInMonth + firstDay - 1); _i++) {
	        content.push(_react2.default.createElement('figure', {
	          key: 'emptyAppend-' + _i,
	          className: 'calendar-day-block flexible flex' }));
	      }
	
	      return content;
	    }
	  }, {
	    key: 'gatherEvents',
	    value: function gatherEvents(allEvents, dayNum) {
	      return allEvents.filter(function (event) {
	        return event.dayNum === dayNum;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'section',
	        { className: 'deadlines-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--row relative' },
	          _react2.default.createElement(
	            'section',
	            { className: 'deadlines-calendar flexible flex flex--column' },
	            _react2.default.createElement(
	              'h2',
	              { className: 'text-green' },
	              _helpers2.default.normalizeMonth(this.props.date.month).full
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'calendar flex flexible flex--column' },
	              _react2.default.createElement(
	                'header',
	                { className: 'calendar-days flex flex--row' },
	                this.props.weekByDays.map(function (day) {
	                  return _react2.default.createElement(
	                    'div',
	                    {
	                      key: day,
	                      'data-day': day,
	                      'data-weekend': true ? day === 'Sat' || day === 'Sun' : false,
	                      className: 'calendar-day flexible center-text text-green' },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      day
	                    )
	                  );
	                })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'calendar-content flexible flex' },
	                this.printCalendar(this.props.date.numOfDaysInMonth, this.props.date.firstDay, _helpers2.default.normalizeMonth(this.props.date.month).full, this.props.events)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'aside',
	            { className: 'weekly-manager flex flex--column' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'task-priorities flex flex--column' },
	              _react2.default.createElement(
	                'h2',
	                { className: 'text-green' },
	                'Priority list'
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'none',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-none' },
	                  'None'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'high',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-high' },
	                  'High'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'medium',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-medium' },
	                  'Medium'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'low',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-low' },
	                  'Low'
	                )
	              )
	            ),
	            this.props.eventIdentifiers.showEventDetails ? _react2.default.createElement(_EventDetails2.default, {
	              dispatch: this.props.dispatch,
	              event: this.props.events.find(function (event) {
	                return event.eventId === _this2.props.eventIdentifiers.showEventDetails;
	              })
	            }) : null
	          ),
	          this.props.indicators.addEventIndicator ? _react2.default.createElement(_AddEvent2.default, { dispatch: this.props.dispatch }) : null
	        )
	      );
	    }
	  }]);
	
	  return Deadlines;
	}(_react2.default.Component);
	
	exports.default = Deadlines;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(30);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _AddEvent = __webpack_require__(29);
	
	var _AddEvent2 = _interopRequireDefault(_AddEvent);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Deadlines = function (_React$Component) {
	  _inherits(Deadlines, _React$Component);
	
	  function Deadlines(props, context) {
	    _classCallCheck(this, Deadlines);
	
	    return _possibleConstructorReturn(this, (Deadlines.__proto__ || Object.getPrototypeOf(Deadlines)).call(this, props, context));
	  }
	
	  _createClass(Deadlines, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch(_helperActions2.default.changeRoute('Grades'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'grades-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--column relative' },
	          this.props.indicators.addEventIndicator ? _react2.default.createElement(_AddEvent2.default, { dispatch: this.props.dispatch }) : null
	        )
	      );
	    }
	  }]);
	
	  return Deadlines;
	}(_react2.default.Component);
	
	exports.default = Deadlines;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(30);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _MyWeekEvent = __webpack_require__(151);
	
	var _MyWeekEvent2 = _interopRequireDefault(_MyWeekEvent);
	
	var _EventDetails = __webpack_require__(80);
	
	var _EventDetails2 = _interopRequireDefault(_EventDetails);
	
	var _AddEvent = __webpack_require__(29);
	
	var _AddEvent2 = _interopRequireDefault(_AddEvent);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyWeek = function (_React$Component) {
	  _inherits(MyWeek, _React$Component);
	
	  function MyWeek(props, context) {
	    _classCallCheck(this, MyWeek);
	
	    return _possibleConstructorReturn(this, (MyWeek.__proto__ || Object.getPrototypeOf(MyWeek)).call(this, props, context));
	  }
	
	  _createClass(MyWeek, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch(_helperActions2.default.changeRoute('My Week'));
	    }
	  }, {
	    key: 'getDayByHours',
	    value: function getDayByHours(displayHour, day) {
	      var _this2 = this;
	
	      return this.props.dayByHours.map(function (hour, i) {
	        var day = void 0,
	            time = void 0,
	            content = void 0;
	
	        day = day ? day : '';
	        content = time = displayHour ? hour : '';
	
	        var hourHeight = _this2.props.hourInMinutes * _this2.props.minuteInPixels;
	
	        return _react2.default.createElement(
	          'div',
	          {
	            key: i,
	            'data-time': hour,
	            className: 'day-hour center-text text-green',
	            style: { 'height': hourHeight } },
	          content
	        );
	      });
	    }
	  }, {
	    key: 'getWeekByDays',
	    value: function getWeekByDays() {
	      var _this3 = this;
	
	      return this.props.weekByDays.map(function (day, i) {
	        var weekend = true ? day === 'Sat' || day === 'Sun' : false;
	        return _react2.default.createElement(
	          'div',
	          { key: i, className: 'week-day flexible text-green relative' },
	          _react2.default.createElement(
	            'div',
	            { className: 'day-heading center-text' },
	            day
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'day-schedule', 'data-weekend': weekend, 'data-day': day },
	            _this3.getDayByHours(false, day),
	            _this3.renderEvents(_this3.props.events.filter(function (event) {
	              return event.day === day;
	            }))
	          )
	        );
	      });
	    }
	  }, {
	    key: 'renderEvents',
	    value: function renderEvents(events) {
	      var _this4 = this;
	
	      return events.map(function (event) {
	        return _react2.default.createElement(_MyWeekEvent2.default, _extends({
	          key: event.eventId,
	          dispatch: _this4.props.dispatch,
	          minuteInPixels: _this4.props.minuteInPixels,
	          hourInMinutes: _this4.props.hourInMinutes
	        }, event));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      return _react2.default.createElement(
	        'section',
	        { className: 'week-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--row relative' },
	          _react2.default.createElement(
	            'section',
	            { className: 'weekly-events flexible flex flex--row height-100' },
	            _react2.default.createElement(
	              'div',
	              { className: 'day-timeline flex flex--column' },
	              this.getDayByHours(true)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'week-timeline flexible flex flex--row' },
	              this.getWeekByDays()
	            )
	          ),
	          _react2.default.createElement(
	            'aside',
	            { className: 'weekly-manager flex flex--column' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'task-priorities flex flex--column' },
	              _react2.default.createElement(
	                'h2',
	                null,
	                'Priority list'
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'none',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-none' },
	                  'None'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'high',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-high' },
	                  'High'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'medium',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-medium' },
	                  'Medium'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { 'data-priority': 'low',
	                  className: 'task-priority flexible self--end' },
	                _react2.default.createElement(
	                  'span',
	                  { className: 'priority-low' },
	                  'Low'
	                )
	              )
	            ),
	            this.props.eventIdentifiers.showEventDetails ? _react2.default.createElement(_EventDetails2.default, {
	              dispatch: this.props.dispatch,
	              event: this.props.events.find(function (event) {
	                return event.eventId === _this5.props.eventIdentifiers.showEventDetails;
	              })
	            }) : null
	          ),
	          this.props.indicators.addEventIndicator ? _react2.default.createElement(_AddEvent2.default, { dispatch: this.props.dispatch }) : null
	        )
	      );
	    }
	  }]);
	
	  return MyWeek;
	}(_react2.default.Component);
	
	exports.default = MyWeek;

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NotFound = function (_React$Component) {
	  _inherits(NotFound, _React$Component);
	
	  function NotFound() {
	    _classCallCheck(this, NotFound);
	
	    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
	  }
	
	  _createClass(NotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        null,
	        'Not Found'
	      );
	    }
	  }]);
	
	  return NotFound;
	}(_react2.default.Component);
	
	exports.default = NotFound;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(30);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _AddEvent = __webpack_require__(29);
	
	var _AddEvent2 = _interopRequireDefault(_AddEvent);
	
	var _helperActions = __webpack_require__(16);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Notes = function (_React$Component) {
	  _inherits(Notes, _React$Component);
	
	  function Notes(props, context) {
	    _classCallCheck(this, Notes);
	
	    return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this, props, context));
	  }
	
	  _createClass(Notes, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch(_helperActions2.default.changeRoute('Notes'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'notes-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--column relative' },
	          this.props.indicators.addEventIndicator ? _react2.default.createElement(_AddEvent2.default, { dispatch: this.props.dispatch }) : null
	        )
	      );
	    }
	  }]);
	
	  return Notes;
	}(_react2.default.Component);
	
	exports.default = Notes;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialAuth = __webpack_require__(82);
	
	var _SocialAuth2 = _interopRequireDefault(_SocialAuth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signin = function (_React$Component) {
	  _inherits(Signin, _React$Component);
	
	  function Signin() {
	    _classCallCheck(this, Signin);
	
	    return _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).apply(this, arguments));
	  }
	
	  _createClass(Signin, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'signin-wrapper wrapper relative flex flex--center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'signin-modal basic-modal flex' },
	          _react2.default.createElement(
	            'aside',
	            { className: 'signin-local custom-auth flexible flex flex--center flex--column' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-white' },
	              'Sign in'
	            ),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'email', name: 'local-email', placeholder: 'email' }),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'password', name: 'local-password', placeholder: 'password' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn', name: 'local-form-submit' },
	              'sign in'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'divider text-white' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'or'
	            )
	          ),
	          _react2.default.createElement(_SocialAuth2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Signin;
	}(_react2.default.Component);
	
	exports.default = Signin;

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialAuth = __webpack_require__(82);
	
	var _SocialAuth2 = _interopRequireDefault(_SocialAuth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signin = function (_React$Component) {
	  _inherits(Signin, _React$Component);
	
	  function Signin() {
	    _classCallCheck(this, Signin);
	
	    return _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).apply(this, arguments));
	  }
	
	  _createClass(Signin, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'signup-wrapper wrapper relative flex flex--center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'signup-modal basic-modal flex' },
	          _react2.default.createElement(
	            'aside',
	            { className: 'signup-local custom-auth flexible flex flex--center flex--column' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-white' },
	              'Create an account'
	            ),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'text', name: 'singup-fn', placeholder: 'First Name' }),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'text', name: 'singup-ln', placeholder: 'Last Name' }),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'email', name: 'singup-email', placeholder: 'Email' }),
	            _react2.default.createElement('input', { className: 'input text-white center-text width-100', type: 'password', name: 'singup-password', placeholder: 'Password' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn', name: 'local-form-submit' },
	              'sign in'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'divider text-white' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'or'
	            )
	          ),
	          _react2.default.createElement(_SocialAuth2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Signin;
	}(_react2.default.Component);
	
	exports.default = Signin;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _helpers = __webpack_require__(83);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function reducer(state, action) {
	  switch (action.type) {
	    //helper reducer
	    case 'CHANGE_ROUTE':
	      return Object.assign.apply(Object, [{}, state, {
	        route: action.payload,
	        indicators: {
	          addEventIndicator: false,
	          dashboardDeleteIndicator: false
	        },
	        eventIdentifiers: {
	          showEventDetails: null,
	          deleteEvent: null
	        }
	      }].concat(_toConsumableArray(state)));
	    case 'SET_ADD_EVENT_INDICATOR':
	      return Object.assign.apply(Object, [{}, state, {
	        indicators: Object.assign.apply(Object, [{}, {
	          addEventIndicator: action.payload
	        }].concat(_toConsumableArray(state.indicators)))
	      }].concat(_toConsumableArray(state)));
	    case 'SET_DELETE_EVENT':
	      return Object.assign.apply(Object, [{}, state, {
	        indicators: Object.assign.apply(Object, [{}, {
	          dashboardDeleteIndicator: action.payload.indicator
	        }].concat(_toConsumableArray(state.indicators))),
	        eventIdentifiers: Object.assign.apply(Object, [{}, {
	          deleteEvent: action.payload.eventId
	        }].concat(_toConsumableArray(state.eventIdentifiers)))
	      }].concat(_toConsumableArray(state)));
	    //event reducer
	    case 'SHOW_EVENT_DETAILS':
	      return Object.assign.apply(Object, [{}, state, {
	        eventIdentifiers: Object.assign.apply(Object, [{}, {
	          showEventDetails: action.payload
	        }].concat(_toConsumableArray(state.eventIdentifiers)))
	      }].concat(_toConsumableArray(state)));
	    case 'DELETE_EVENT_ANSWER':
	      return Object.assign.apply(Object, [{}, state, {
	        indicators: Object.assign.apply(Object, [{}, {
	          dashboardDeleteIndicator: false
	        }].concat(_toConsumableArray(state.indicators))),
	        eventIdentifiers: Object.assign.apply(Object, [{}, {
	          deleteEvent: null
	        }].concat(_toConsumableArray(state.eventIdentifiers))),
	        events: action.payload ? _helpers2.default.sliceObjectFromArrayByIdFilter(state.events, 'eventId', state.eventIdentifiers.deleteEvent) : state.events
	      }].concat(_toConsumableArray(state)));
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(27);
	
	var _Page = __webpack_require__(145);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _Main = __webpack_require__(81);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Signup = __webpack_require__(159);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Signin = __webpack_require__(158);
	
	var _Signin2 = _interopRequireDefault(_Signin);
	
	var _Dashboard = __webpack_require__(152);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _MyWeek = __webpack_require__(155);
	
	var _MyWeek2 = _interopRequireDefault(_MyWeek);
	
	var _Deadlines = __webpack_require__(153);
	
	var _Deadlines2 = _interopRequireDefault(_Deadlines);
	
	var _Grades = __webpack_require__(154);
	
	var _Grades2 = _interopRequireDefault(_Grades);
	
	var _Notes = __webpack_require__(157);
	
	var _Notes2 = _interopRequireDefault(_Notes);
	
	var _NotFound = __webpack_require__(156);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// function requireAuth(nextState, replaceState) {
	//   replaceState('/auth')
	// }
	
	// User routes
	
	
	// Auth routes
	var redirectToAuthIndex = function redirectToAuthIndex(nextState, replaceState) {
	  replaceState('/auth/signin');
	};
	
	var redirectToUserIndex = function redirectToUserIndex(nextState, replaceState) {
	  replaceState('/user/dashboard');
	};
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Page2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { onEnter: redirectToUserIndex }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'user' },
	    _react2.default.createElement(_reactRouter.IndexRoute, { onEnter: redirectToUserIndex }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: _Dashboard2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'week', component: _MyWeek2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'deadlines', component: _Deadlines2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'grades', component: _Grades2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'notes', component: _Notes2.default })
	  ),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'auth' },
	    _react2.default.createElement(_reactRouter.IndexRoute, { onEnter: redirectToAuthIndex }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _Signin2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _Signup2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	);
	exports.default = routes;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configStore;
	
	var _redux = __webpack_require__(79);
	
	var _reduxLogger = __webpack_require__(141);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducer = __webpack_require__(160);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let reducers = combineReducers({
	//   helperReducer,
	//   toDoReducer
	// });
	
	var reducers = _reducer2.default;
	
	// import initialState from './config';
	// import helperReducer from './reducers/helperReducer';
	// import toDoReducer from './reducers/toDoReducer';
	
	var reduxCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)((0, _reduxLogger2.default)()))(_redux.createStore);
	
	var date = new Date();
	
	function configStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    env: ({"env":"development"}).env,
	    indicators: {
	      addEventIndicator: false,
	      dashboardDeleteIndicator: false
	    },
	    eventIdentifiers: {
	      showEventDetails: null,
	      deleteEvent: null
	    },
	    user: {
	      userLoggedIn: true,
	      userFirstName: 'Nebojsa'
	    },
	    route: null,
	    date: {
	      // current month
	      month: date.getMonth() + 1,
	      numOfDaysInMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
	      firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getDay()
	    },
	    // date: {
	    //   // next month
	    //   month: date.getMonth() + 2,
	    //   numOfDaysInMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0).getDate(),
	    //   firstDay: new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay()    
	    // },
	    hourInMinutes: 60,
	    minuteInPixels: 3,
	    dayByHours: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 PM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM'],
	    weekByDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	    dayInMinutes: 1440,
	    eventDetails: '',
	    events: [{
	      eventId: 'sadgkagsdhl',
	      eventHeadline: 'First ToDo',
	      eventDesc: 'First Mock Todo For Testing',
	      day: 'Mon',
	      dayNum: 13,
	      fullStartTime: '08:00 AM',
	      hour: '8',
	      startInMin: 480,
	      timeOfDay: 'AM',
	      end: '09:00 AM',
	      endInMin: 540,
	      durationInMin: 60,
	      priority: 'high'
	    }, {
	      eventId: 'dghdrhjtj',
	      eventHeadline: 'Second ToDo',
	      eventDesc: 'Second Mock Todo For Testing',
	      day: 'Tue',
	      dayNum: 14,
	      fullStartTime: '09:15 AM',
	      hour: '9',
	      startInMin: 555,
	      timeOfDay: 'AM',
	      end: '11:00 AM',
	      endInMin: 660,
	      durationInMin: 105,
	      priority: 'medium'
	    }, {
	      eventId: 'gdhmfj,k.',
	      eventHeadline: 'Third ToDo',
	      eventDesc: 'Third Mock Todo For Testing',
	      day: 'Thu',
	      dayNum: 16,
	      fullStartTime: '12:00 AM',
	      hour: '12',
	      startInMin: 720,
	      timeOfDay: 'AM',
	      end: '2:00 PM',
	      endInMin: 840,
	      durationInMin: 120,
	      priority: 'low'
	    }, {
	      eventId: 'ytuitkukt',
	      eventHeadline: 'Fourth ToDo',
	      eventDesc: 'Fourth Mock Todo For Testing',
	      day: 'Sat',
	      dayNum: 18,
	      fullStartTime: '08:45 AM',
	      hour: '8',
	      startInMin: 525,
	      timeOfDay: 'AM',
	      end: '11:00 AM',
	      endInMin: 660,
	      durationInMin: 255,
	      priority: 'none'
	    }, {
	      eventId: 'jylruti',
	      eventHeadline: 'Fifth ToDo',
	      eventDesc: 'Fifth Mock Todo For Testing',
	      day: 'Mon',
	      dayNum: 13,
	      fullStartTime: '05:00 PM',
	      hour: '5',
	      startInMin: 300,
	      timeOfDay: 'PM',
	      end: '07:00 PM',
	      endInMin: 420,
	      durationInMin: 120,
	      priority: 'none'
	    }, {
	      eventId: 'e4ryuio78',
	      eventHeadline: 'Sixth ToDo',
	      eventDesc: 'Sixth Mock Todo For Testing',
	      day: 'Fri',
	      dayNum: 17,
	      fullStartTime: '01:00 AM',
	      hour: '1',
	      startInMin: 60,
	      timeOfDay: 'AM',
	      end: '03:15 AM',
	      endInMin: 195,
	      durationInMin: 135,
	      priority: 'medium'
	    }]
	  };
	
	  return reduxCreateStore(reducers, initialState);
	}

/***/ },

/***/ 167:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.bundle.js.map