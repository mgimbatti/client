// import axios from 'axios';

// variables que se exportan para el reducer
export const PROPERTIES = 'properties';
const imageTest = 'https://lahaus.imgix.net/uploads/real_estate_attachment/picture/1473415/condominio_la_esperanza_casas_nuevas_en_venta_en_casco_urbano_cota_con_3_habitaciones_gallery_cfeb5c7f3c632e621a26.jpg?auto=compress%2Cenhance%2Cformat&w=1200&h=630&fit=crop&crop=edges&alt=Vivienda%20nueva%2C%20Condominio%20La%20Esperanza%2C%20Casas%20nuevas%20en%20venta%20en%20Casco%20Urbano%20Cota%20con%203%20hab.';
const arrayTest = [{
  image: imageTest, postName: 'I am postName', propType: 'I am propType', neighborhood: ' Iam neighborhood', price: 'I am price', rooms: 'I am rooms', m2: 'Iam m2',
},
{
  image: imageTest, postName: 'I am postName', propType: 'I am propType', neighborhood: ' Iam neighborhood', price: 'I am price', rooms: 'I am rooms', m2: 'Iam m2',
},
{
  image: imageTest, postName: 'I am postName', propType: 'I am propType', neighborhood: ' Iam neighborhood', price: 'I am price', rooms: 'I am rooms', m2: 'Iam m2',
},
{
  image: imageTest, postName: 'I am postName', propType: 'I am propType', neighborhood: ' Iam neighborhood', price: 'I am price', rooms: 'I am rooms', m2: 'Iam m2',
}];
// Actions
export const detailPokemon = () => async function (dispatch) {
  // const property = await axios.get('http://localhost:3001/');
  dispatch({
    type: PROPERTIES,
    payload: arrayTest,
    // payload: property.data
  });
};