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
      lista: estudiantes
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
      this.lista.unshift({nombre: 'Francisco', apellido: 'chanataxi'});
    }

  }
});

app.mount('#myApp');
