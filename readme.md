# Rick And Morty Api
En este repositorio esta compuesto de una api en nodejs trabajado en javascript la cual se encarga de realizar la consulta a la api de rick y morty pero en su version de graphql.

En esta API se monta express, realiza la consulta con a la api de graphql y obtiene los personajes filtrados por su specie aunque por hay se colan algunos humanoides.

El frontend esta realizado con Material UI (MUI), NextJS y Typescript en donde mediante la funcion getServerSideProps obtiene los personajes luego los coloco en un estado mutable en donde el useEffect de react captura el cambio del estado page y realiza la consulta por pagina cuando cambio de pagina en la paginacion que esta en el final de la pagina.

## API

para correr la API lo clonamos, posteriormente instalamos las dependencias y lo corremos con
npm run dev.

## Frontend

Solo lo clonamos, instalamos las dependencias y lo corremos con npm run dev.
