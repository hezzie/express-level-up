import Express from "express";
import bodyParser from 'body-parser'

let data = []

const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "Hello people",
    data:data
  });
});
app.post('/', (req, res) =>{
    console.log('=========This is the request body============ ', req.body);
    data.push(req.body)
    console.log('=======This is the data========',data)
    res.status(201).json({
      data:data,
      success:"Data succesfully submitted"
    })
  
})
app.get('/:id', (req,res) =>{
console.log('===========Single data fetched by id============',data[req.params.id])
res.status(200).json({
  data:data[req.params.id],
  success:'Successfully fetched the single data by id'
})
})
app.delete('/:id', (req, res) =>{
  console.log('========before delete =======',data)
  data.splice([req.params.id],1)
  console.log('========after delete =======',data)
  res.status(201).json({
    data:data,
    success :'Deleted successfully'
  })
} )
app.put('/:id', (req,res)=>{
  console.log('========data before update=======',data)
data[req.params.id] = req.body
console.log('========data after update=======',data)
res.status(201).json({
  data:data,
  success:'updated successfully'
})
} )

app.listen(3000, () => console.log("Hello world"));
