webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(26);
	
	var _reactRedux = __webpack_require__(39);
	
	var _store = __webpack_require__(154);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _routes = __webpack_require__(153);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(159);
	__webpack_require__(80);
	
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

/***/ 28:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTIONS = {
	  CHANGE_ROUTE: 'CHANGE_ROUTE'
	};
	
	exports.default = {
	  changeRoute: function changeRoute(route) {
	    return {
	      type: ACTIONS.CHANGE_ROUTE,
	      payload: route
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
	
	var _reactRouter = __webpack_require__(26);
	
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

/***/ 78:
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

/***/ 79:
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

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(26);
	
	var _reactRedux = __webpack_require__(39);
	
	var _promisePolyfill = __webpack_require__(187);
	
	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
	
	var _Header = __webpack_require__(141);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Main = __webpack_require__(78);
	
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
	      devReload: false
	    };
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      console.log('Initializing page render in ' + this.props.env + ' mode!');
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
	      if (this.state.devReload && !document.querySelector('#reload-script')) {
	        var s = document.createElement('script');
	        s.setAttribute('src', '/reload/reload.js');
	        s.setAttribute('id', 'reload-script');
	        document.body.appendChild(s);
	
	        s.onload = function () {
	          return console.log('Development mode with autoreload.');
	        };
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
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
	              return _this2.bodyDOM = body;
	            } },
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper' },
	            _react2.default.createElement(_Header2.default, {
	              user: this.props.user,
	              route: this.props.route
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

/***/ 140:
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
	          className: 'dashboard-event flex flex--column',
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
	
	  return DashboardEvent;
	}(_react2.default.Component);
	
	exports.default = DashboardEvent;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(26);
	
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
	
	  // componentWillMount() {
	  // }
	
	  // componentDidMount() {
	  // }
	
	  // shouldComponentUpdate() {
	  //   console.log('Should header update')
	  //   return true
	  // }
	  // componentWillUpdate() {
	  //   console.log('header will update');
	  // }
	  // componentDidUpdate() {
	  //   console.log('header did update');
	  // }
	
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
	            'h2',
	            { className: 'route-name flexible self--center text-white lighten-font center-text uppercase' },
	            this.props.route
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ },

/***/ 142:
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
	        'top': this.calculateStartPoint(this.props.timeOfDay, this.props.hour, this.props.startInMin)
	      });
	    }
	  }, {
	    key: 'calculateStartPoint',
	    value: function calculateStartPoint(timeOfDay, hour, startInMin) {
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
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'section',
	        {
	          ref: function ref(eventDiv) {
	            return _this2.eventDiv = eventDiv;
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

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(39);
	
	var _helperActions = __webpack_require__(28);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	var _AsideNav = __webpack_require__(29);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _DashboardEvent = __webpack_require__(140);
	
	var _DashboardEvent2 = _interopRequireDefault(_DashboardEvent);
	
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
	      return _react2.default.createElement(_DashboardEvent2.default, _extends({ key: event.eventId }, event));
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
	          { className: 'flexible flex flex--column flex--center' },
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
	          )
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react2.default.Component);
	
	exports.default = Dashboard;

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(29);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _helperActions = __webpack_require__(28);
	
	var _helperActions2 = _interopRequireDefault(_helperActions);
	
	var _helpers = __webpack_require__(151);
	
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
	    value: function printCalendar(numOfDaysInMonth, firstDay, monthName) {
	      var content = [];
	
	      //prepend empty divs
	      for (var i = 1; i <= firstDay - 1; i++) {
	        content.push(_react2.default.createElement('div', {
	          key: 'emptyPrepend-' + i,
	          className: 'calendar-day-block flexible flex' }));
	      }
	
	      //render calendar divs
	      for (var _i = 1; _i <= numOfDaysInMonth; _i++) {
	        content.push(_react2.default.createElement(
	          'div',
	          {
	            key: monthName + '-' + _i,
	            className: 'calendar-day-block flexible flex' },
	          _react2.default.createElement(
	            'span',
	            { className: 'day-indicator flex flex--center text-green' },
	            _i
	          )
	        ));
	      }
	
	      //append empty divs
	      for (var _i2 = 0; _i2 < 35 - (numOfDaysInMonth + firstDay - 1); _i2++) {
	        content.push(_react2.default.createElement('div', {
	          key: 'emptyAppend-' + _i2,
	          className: 'calendar-day-block flexible flex' }));
	      }
	
	      return content;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'deadlines-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--row' },
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
	                this.printCalendar(this.props.date.numOfDaysInMonth, this.props.date.firstDay, _helpers2.default.normalizeMonth(this.props.date.month).full)
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
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Deadlines;
	}(_react2.default.Component);
	
	exports.default = Deadlines;

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(29);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _helperActions = __webpack_require__(28);
	
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
	        _react2.default.createElement('main', { className: 'flexible flex flex--column' })
	      );
	    }
	  }]);
	
	  return Deadlines;
	}(_react2.default.Component);
	
	exports.default = Deadlines;

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(29);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _MyWeekEvent = __webpack_require__(142);
	
	var _MyWeekEvent2 = _interopRequireDefault(_MyWeekEvent);
	
	var _helperActions = __webpack_require__(28);
	
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
	          minuteInPixels: _this4.props.minuteInPixels,
	          hourInMinutes: _this4.props.hourInMinutes
	        }, event));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'week-wrapper wrapper user-wrapper' },
	        _react2.default.createElement(_AsideNav2.default, { userFirstName: this.props.user.userFirstName }),
	        _react2.default.createElement(
	          'main',
	          { className: 'flexible flex flex--row' },
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
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return MyWeek;
	}(_react2.default.Component);
	
	exports.default = MyWeek;

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

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AsideNav = __webpack_require__(29);
	
	var _AsideNav2 = _interopRequireDefault(_AsideNav);
	
	var _helperActions = __webpack_require__(28);
	
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
	        _react2.default.createElement('main', { className: 'flexible flex flex--column' })
	      );
	    }
	  }]);
	
	  return Notes;
	}(_react2.default.Component);
	
	exports.default = Notes;

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
	
	var _SocialAuth = __webpack_require__(79);
	
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

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialAuth = __webpack_require__(79);
	
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

/***/ 151:
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
	    }
	  };
	}();

/***/ },

/***/ 152:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function reducer(state, action) {
	  switch (action.type) {
	    case 'CHANGE_ROUTE':
	      return Object.assign.apply(Object, [{}, state, {
	        route: action.payload
	      }].concat(_toConsumableArray(state)));
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(26);
	
	var _Page = __webpack_require__(139);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _Main = __webpack_require__(78);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Signup = __webpack_require__(150);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Signin = __webpack_require__(149);
	
	var _Signin2 = _interopRequireDefault(_Signin);
	
	var _Dashboard = __webpack_require__(143);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _MyWeek = __webpack_require__(146);
	
	var _MyWeek2 = _interopRequireDefault(_MyWeek);
	
	var _Deadlines = __webpack_require__(144);
	
	var _Deadlines2 = _interopRequireDefault(_Deadlines);
	
	var _Grades = __webpack_require__(145);
	
	var _Grades2 = _interopRequireDefault(_Grades);
	
	var _Notes = __webpack_require__(148);
	
	var _Notes2 = _interopRequireDefault(_Notes);
	
	var _NotFound = __webpack_require__(147);
	
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

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configStore;
	
	var _redux = __webpack_require__(77);
	
	var _reduxLogger = __webpack_require__(135);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducer = __webpack_require__(152);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reduxCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)((0, _reduxLogger2.default)()))(_redux.createStore);
	
	var date = new Date();
	
	function configStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    env: ({"env":"development"}).env,
	    user: {
	      userLoggedIn: true,
	      userFirstName: 'Nebojsa'
	    },
	    route: '',
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
	    events: [{
	      eventId: 'sadgkagsdhl',
	      eventHeadline: 'First ToDo',
	      eventDesc: 'First Mock Todo For Testing',
	      day: 'Mon',
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
	
	  return reduxCreateStore(_reducer2.default, initialState);
	}

/***/ },

/***/ 159:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.bundle.js.map