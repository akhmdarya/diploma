import CookieBanner from 'react-cookie-banner';
 
React.renderComponent(
  <div>
    <CookieBanner
      message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
      onAccept={() => {}}
      cookie="user-has-accepted-cookies" />
  </div>,
  document.body
);
export default CookieBanner;