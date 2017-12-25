import React from 'react';
import ReactDOM from 'react-dom';
import rh from 'react-hyperscript';
// import routes from './config/routes';

// var USER_DATA = {
//   name: 'JB',
//   username: 'Bairstow',
//   image: 'https://avatars2.githubusercontent.com/u/6224719?v=3&s=460'
// }
//
// var FriendsContainer = React.createClass({
//   render: function() {
//     var name = 'JB';
//     var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//     return (
//       rh('div', [
//         rh('h3', 'Name: ' + name),
//         rh(ShowList, { names: friends})
//       ])
//     );
//   }
// });
// var ShowList = React.createClass({
//   render: function() {
//     var listItems = this.props.names.map( function(friend) {
//       return rh('li', friend);
//     });
//     return (
//       rh('div', [
//         rh('h3', 'Friends'),
//         rh('ul', listItems)
//       ])
//     );
//   }
// });
// var ProfilePic = React.createClass({
//   render: function() {
//     return (
//       rh('img', { src: this.props.imageUrl, style: {height: 100, width: 100} })
//     );
//   }
// });
// var Link = React.createClass({
//   changeUrl: function() {
//     console.log('changeUrl called.');
//     window.location.replace(this.props.href);
//   },
//   render: function() {
//     return (
//       rh('span', { style: { color: 'blue', cursor: 'pointer' }, onClick: this.changeUrl }, this.props.children)
//     );
//   }
// });
// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       rh('div', [
//         rh(Link, { href: 'https://www.github.com/' + this.props.username }, this.props.username)
//       ])
//     );
//   }
// });
// var ProfileName = React.createClass({
//   render: function() {
//     return (
//       rh('div', this.props.name)
//     );
//   }
// });
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       rh('div', [
//         rh(ProfilePic, { imageUrl: this.props.user.image }),
//         rh(ProfileName, { name: this.props.user.name }),
//         rh(ProfileLink, { username: this.props.user.username })
//       ])
//     );
//   }
// });
ReactDOM.render(routes, document.getElementById('app'));
