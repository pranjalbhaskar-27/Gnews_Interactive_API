const Port=process.env.PORT||8080;
const express=require ('express')
const cors=require('cors')
const  app=express();
const apicache=require('apicache')
const axios=require('axios')

const cache=apicache.middleware
app.use(cors());

app.use(express());
const token ="b6d51f7ea1e024e301da3bdcff4fa121"


// GET by keywords
app.get('/search/:name',cache('2 minutes'), async(req,res)=>{
    let name=req.params.name
    console.log(name)

    try {
        let URL=`https://gnews.io/api/v4/search?q=${name}&token=${token}`
        const resData=await axios.get(URL);
        // console.log(resData)
        res.status(200).send({articles:resData.data.articles})
    } catch (er) {
        console.log(er,er.response)
    }
})


// GET (fetching N news articles of given search term)
app.get('/search/:name/:max', cache('2 minutes'),async(req,res)=>{

    const max=req.params.max
    let name=req.params.name
    console.log(max,name)
    try {
        let URL=`https://gnews.io/api/v4/search?q=${name}&token=${token}&max=${max}`
        const resData=await axios.get(URL);
        // console.log(resData)
        res.status(200).send({articles:resData.data.articles})
    } catch (er) {
        console.log(er,er.response)
    }
})

// finding a news article with a specific title

app.get('/title/:name',cache('2 minutes'), async(req,res)=>{

    let name=req.params.name
    console.log(name)
    try {
        let URL=`https://gnews.io/api/v4/search?q=${name}&in=title&token=${token}`
        const resData=await axios.get(URL);
        // console.log(resData)
        res.status(200).send({articles:resData.data.articles})
    } catch (er) {
        console.log(er,er.response)
    }
})

// finding a news article with a specific description

app.get('/description/:name',cache('2 minutes'), async(req,res)=>{

    let name=req.params.name
    console.log(name)
    try {
        let URL=`https://gnews.io/api/v4/search?q=${name}&in=description&token=${token}`
        const resData=await axios.get(URL);
        // console.log(resData)
        res.status(200).send({articles:resData.data.articles})
    } catch (er) {
        console.log(er,er.response)
    }
})


app.listen(Port,()=>{
    console.log(`(((listening to what port ${Port} has to say!)))`)
})