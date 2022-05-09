const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const db = [];

app.get("/cachorros/:id", (req, res) => {
  const id = req.params.id;
 db.forEach(e => {
   if(id == e.id) {
     res.status(200).json(e)
  }
 })
  res.status(404).json()
});

app.post("/cachorros/", (req,res)=> {
  const body = req.body;
 
db.push({
    "id": body.id,
    "nome": body.nome,
    "raca": body.raca,
    "status": body.status
})
  res.status(200).json({
    "id": body.id,
    "nome": body.nome,
    "raca": body.raca,
    "status": body.status
  })

})

module.exports = app; 