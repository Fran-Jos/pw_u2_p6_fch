console.log(Vue);

const estudiantes=[
  {
    nombre: "Francisco",
  apellido: "Chanataxi"
},
{
  nombre: "Juan",
  apellido: "Perez"
  },
  {
    nombre: "Maria",
    apellido: "Gonzales"
    },
    {
      nombre: "Pedro",
      apellido: "Lopez"
      },
      {
        nombre: "Jose",
        apellido: "Garcia"
        },
        {
          nombre: "Luis",
          apellido: "Gonzales"
          }
];

const app = Vue.createApp({
  /*template: `
  <div>
    <h1>Hola Mundo desde Vue.js</h1>
      <p>{{ 1 + 1 }}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{[true?'True':'False']}}</p>
    </div>
  `*/
  data(){
    return{
      mensaje: 'Hola Mundo propiedad Reactiva',
      valor: 7,
      lista: estudiantes,
      nombre: null,
      apellido: null
    }
  },
  methods: {

    cambiarTexto(){
      this.mensaje = 'texto cambiado';
    }
    ,
    sumar(){
      this.valor = this.valor + 10000000000000000009;
    },
    agregarEstu(){

      console.log(this.nombre);
      console.log(this.apellido);

      const nuevo ={
        nombre: this.nombre,
        apellido: this.apellido
      }
      
      this.lista.unshift(nuevo);
    },

    resetear(){
      this.nombre = null;
      this.apellido = null;
    },

    agregar2({charCode}){
      console.log(charCode);

      //(charCode !==13) return;
      this.agregarEstu();
    }

  }
});

app.mount('#myApp');
