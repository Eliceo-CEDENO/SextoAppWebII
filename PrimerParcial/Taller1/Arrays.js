const inversionistas= [
    {id:1, nombre:'Elias Cedeño', identificacion:1313000000},
    {id:2, nombre:'Wilter Zambrano', identificacion:1314000000},
    {id:3, nombre:'Yaritza Zambrano', identificacion:1315000000},
    {id:4, nombre:'Ronald  Solorzano', identificacion:1316000000},
    {id:5, nombre:'Jamileth Garcia', identificacion:1317000000},
]
const conceptosinversion=[
    {id: 1, concepto:'Diversificación', detalle:'Diferentes tipos de activos'},
    {id: 2, concepto:'Inversión en índices', detalle:'Inventir mercados amplios'},
    {id: 3, concepto:'Análisis fundamental', detalle:'Desarrollo económico en una empresa'},
    {id: 4, concepto:'Inversión de valor', detalle:'Inventir mercados amplios'},
    {id: 5, concepto:'Inversión a largo plazo', detalle:'comprar y mantener inversiones '},
]
const inversionesrealizada=[
    {id: 1, idinversionista:1, idconceptoinversion:1, valorinversion:300, fecha:'7/04/2023', duracioninversiondias:30 },
    {id: 2, idinversionista:2,  idconceptoinversion:2, valorinversion:500, fecha:'6/04/2023', duracioninversiondias:60 },
    {id: 3, idinversionista:3,  idconceptoinversion:3, valorinversion:1000, fecha:'5/04/2023', duracioninversiondias:90 },
    {id: 4, idinversionista:4,  idconceptoinversion:4, valorinversion:2000, fecha:'3/04/2023', duracioninversiondias:90 },
    {id: 5, idinversionista:5,  idconceptoinversion:5, valorinversion:3000, fecha:'2/04/2023', duracioninversiondias:120 },
]


module.exports = {
    inversionistas, 
    conceptosinversion,
    inversionesrealizada
}