import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>the info: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is sensitive info!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuth = WrappedComponent => {
  return props => (
    <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>please log in</p>}</div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo info="secret info" isAuthenticated />, document.getElementById('app'));
