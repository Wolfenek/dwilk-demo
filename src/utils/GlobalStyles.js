import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-size: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
	padding: 0;
	border: 0;
}

 /* Fonts */
 @import url('https://fonts.googleapis.com/css?family=Lato:400,700|MedievalSharp&display=swap');
`;

export default GlobalStyles;
