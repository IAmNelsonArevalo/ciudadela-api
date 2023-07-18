const express = require("express");
const axios = require("axios");
const app = express();

app.get("/get-characters", async (req, res) => {
   try {
      const {page} = req.query;
      const resGraphql = await axios({
         url: "https://rickandmortyapi.com/graphql",
         method: "POST",
         data: {
            query: `
               query {
                 characters(page: ${page},filter: {species: "Human"}) {
                   info {
                     count
                   }
                   results {
                     name, image, species
                   }
                 }
               }
            `
         }
      });

      res.status(200).json(
          {
             transaction: {status: true},
             message: {type: "success", content: "Done.", code: 200},
             data: resGraphql.data.data.characters.results
          }
      );
   } catch (e) {
      res.status(500).json({
         transaction: {status: false},
         message: {type: "error", content: "Ocurrio un error al momento de obtener los personajes.", code: 500},
         data: e
      })
   }
});

app.listen(8000,() => console.log(`App running on port 3000`));