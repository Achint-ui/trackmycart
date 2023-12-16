import raju_img from './raju_prakash.jpg'
import shyam_img from './shyam_kumar.jpg'
import fruits_pic from '../Assets/fruits.png'
import veg_pic from '../Assets/veg.png'
import shanti_img from '../Assets/Shanti_devi.jpg'
import deepu_img from '../Assets/Deepu_Tamu.jpg'
import bablu_img from '../Assets/Bablu_kant.jpg'
import deepak_img from '../Assets/deepak_prakash.jpg'
import gopal_img from '../Assets/Gopal_Ji.jpg'
import jitendra_img from '../Assets/Jitendra_kumar.jpg'
import himmat_img from '../Assets/Himmat_amar.jpg'
import kokila_img from '../Assets/kokila_devi.jpg'

let all_vendors = [
    {
      id: 1,
      name: "Raju Prakash",
      category: "veg",
      category_pic: veg_pic,
      image: raju_img,
      lat: 28.7087567267089, 
      lon: 77.16724179032126,
      description: 'I sell all kinds of vegetable',
      description_long: "I sell all kinds of vegetables such as bhindi, potatoes, onions. I sell them in reasonable prices. ",
    },
    {
      id: 2,
      name: "Shyam Kumar",
      category: "fruits",
      category_pic: fruits_pic,
      image: shyam_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: "I sell all kinds of fruits.",
      description_long: "I sell all kinds of fruits such as apples, mangoes, grapes. I sell them in reasonable prices.Bargaining is possible.",
    },
    {
      id: 3,
      name: "Deepak Prakash",
      category: "fruits",
      category_pic: fruits_pic,
      image: deepak_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: "I sell all kinds of fruits.",
      description_long: "I sell all kinds of fruits such as apples, mangoes, grapes. I sell them in reasonable prices.Bargaining is possible.",
    },
    {
      id: 4,
      name: "Gopal Ji",
      category: "fruits",
      category_pic: fruits_pic,
      image: gopal_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: "I sell all kinds of fruits.",
      description_long: "I sell all kinds of fruits such as apples, mangoes, grapes. I sell them in reasonable prices.Bargaining is possible.",
    },
    {
      id: 5,
      name: "Jitendra Kumar",
      category: "both",
      category_pic: fruits_pic,
      image: jitendra_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: 'I sell all kinds of vegetables as well as fruits',
      description_long: "I sell all kinds of vegetables and fruits such as bhindi, potatoes, onions and apples, grapes, pineapple and many more. I sell them in reasonable prices. Bargaining is available.",
    },
    {
      id: 6,
      name: "Himmat Amar",
      category: "both",
      category_pic: fruits_pic,
      image: himmat_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: 'I sell all kinds of vegetables as well as fruits',
      description_long: "I sell all kinds of vegetables and fruits such as bhindi, potatoes, onions and apples, grapes, pineapple and many more. I sell them in reasonable prices. Bargaining is available.",
    },
    {
      id: 7,
      name: "Shanti Devi",
      category: "veg",
      category_pic: veg_pic,
      image: shanti_img,
      lat: 28.740865, 
      lon: 77.152902,
      description: "I sell all kinds of vegetables",
      description_long:'"I sell all kinds of vegetables such as bhindi, potatoes, onions. I sell them in reasonable prices. Bargaining is available.',
    },
    {
      id: 8,
      name: "Deepu Tamu",
      category: "veg",
      category_pic: veg_pic,
      image: deepu_img,
      lat: 28.7087567267089, 
      lon: 77.16724179032126,
      description: 'I sell all kinds of vegetables',
      description_long: "I sell all kinds of vegetables such as bhindi, potatoes, onions. I sell them in reasonable prices. Bargaining is available.",
    },
    {
      id: 9,
      name: "Bablu Kant",
      category: "both",
      category_pic: veg_pic,
      image: bablu_img,
      lat: 28.7087567267089, 
      lon: 77.16724179032126,
      description: 'I sell all kinds of vegetables as well as fruits',
      description_long: "I sell all kinds of vegetables and fruits such as bhindi, potatoes, onions and apples, grapes, pineapple and many more. I sell them in reasonable prices. Bargaining is available.",
    },
    {
      id: 10,
      name: "Kokila Devi",
      category: "both",
      category_pic: veg_pic,
      image: kokila_img,
      lat: 28.7087567267089, 
      lon: 77.16724179032126,
      description: 'I sell all kinds of vegetables as well as fruits',
      description_long: "I sell all kinds of vegetables and fruits such as bhindi, potatoes, onions and apples, grapes, pineapple and many more. I sell them in reasonable prices. Bargaining is available.",
    },
]



export default all_vendors

