import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};    
}

/* Accessibilité : focus visible au clavier (sans modifier le focus souris) */
a:focus-visible,
button:focus-visible,
[role="button"]:focus-visible,
input:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Lien d’évitement pour la navigation au clavier */
.skip-link {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: top 0.2s ease;
}
.skip-link:hover,
.skip-link:focus {
  text-decoration: none;
}
.skip-link:focus {
  top: 1rem;
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

::-webkit-scrollbar {
    width: 0px;
}
`;

export default GlobalStyle;
