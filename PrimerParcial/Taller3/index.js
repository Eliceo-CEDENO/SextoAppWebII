const mongoose =  require('mongoose')

const connecionURL="mongodb+srv://admin1:admin1@cluster0.ldz0ign.mongodb.net/test";

(async ()=>{
    try {

        const estadoDeLaConexion =  await mongoose.connect(connecionURL)


        // definición de un inverionista, 
    

        const Inversionista= mongoose.model("Inversionista", { nombre:String, identificacion:String});
        const Conceptosinversion = mongoose.model("Conceptosinversion", {concepto:String, detalle:String});
        const Inversion =mongoose.model("Inversion",{
            valorinversion:String,
            fecha:String,
            duracioninversiondias:String,
            idinversionista: { type: mongoose.Types.ObjectId, ref:"Inversionista" },
            idconceptoinversion: { type: mongoose.Types.ObjectId, ref:"Conceptosinversion" },
            
        });

        const inversionista1 = new Inversionista({nombre:"Elias Cedeño",identificacion:"1313000000" });
        const inversionista2 = new Inversionista({nombre:"Wilter Zambrano",identificacion:"1314000000"});
        const saveinversionista1 =  await inversionista1.save();
    
        const saveinversionista2 =  await inversionista2.save();


        const conceptosinversion1 = new Conceptosinversion({concepto:"Inversión en índices", detalle:"Diferentes tipos de activos"});
        const conceptosinversion2 = new Conceptosinversion({concepto:"Diversificación", detalle:"Inventir mercados amplios"});
        const saveconceptosinversion1 =  await conceptosinversion1.save();
        const saveconceptosinversion2 =  await conceptosinversion2.save();


        const inversion1 =  new Inversion({
            valorinversion:"300",
            fecha:"7/04/2023",
            duracioninversiondias:"30",
            idinversionista: saveinversionista1._id,
            idconceptoinversion:saveconceptosinversion1._id 

        })




        const saveInversion =  await inversion1.save();
        const result=  await Inversion.find().populate(["idinversionista","idconceptoinversion"])
       // console.log(result  );
        
        //TODOS LOS CICLOS
        console.log("MEDIANTE FOREACH")
        result.forEach(element => {
            console.log(element)
        });

        console.log("MEDIANTE FOR-OF")
        for (const iterator of result) {
            console.log(iterator)
        }

        console.log("MEDIANTE FOR")

        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            console.log(element)
        }


        
    } catch (error) {
        console.log(error);   
    }
})()

