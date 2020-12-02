```js
...
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
...
return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          ...
        </div>
        <DarkFooter />
      </div>
    </>
  );

```