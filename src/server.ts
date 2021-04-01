import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: 'Hello world'});
});

app.post('/courses', (request, response)=>{
    const { name } = request.body;
    response.json({ name });
})


app.listen(3333, ()=>{
    console.log("Back-and Started!")
});