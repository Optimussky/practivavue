new Vue({
    el: '#app',
    data: {
        saludar: "Hola desde la Instancia de Vuejs",
        numero: 10,
        lista: ['1','2','3','4','100','500','1000','6000'],
        activo: false,
        blog: '<h4>Hola mundo, con v-html</h4>',
        texteando: 'Texto de prueba...',
        full_name: '',
        validation_error: '',
        nombre: '',
        text_error: false,
        text_success: false,
        sizetxt: 10,
    },
    methods: {
        saluda: function () {
            console.log('Saludando desde una funcion');
            console.log('Obtener valor de data.texto',this.texteando);
        },
        inputCambios: function (parametros) {
            console.log(parametros)
        },
        verificarFullName: function () {
            if (this.full_name.length < 4) {
                this.validation_error = 'El nombre no es válido'
            } else {
                this.validation_error = ''
                console.log(this.full_name)
            }
        },
        verificarNombre: function () {
            if (this.nombre === 'Beto') {
                this.text_success = true
                this.text_error = false
            } else {
                this.text_error = true
                this.text_success = false
            }
        },
        cambiarSize: function () {
            this.font_texto = parseInt(this.sizetxt)
        }
    },
});

new Vue({
    el: '#app2',
    data: {
        num1: 0,
        num2: 2,
        result: 0,
    },
    computed: {
        //Las propiedades computadas ayudar a tener un mejor performance al navegador
        sumaComputada: function (){
            return parseInt(this.num1) + parseInt(this.num2)
        }
    },
    methods: {
        sumarNumeros: function () {
            this.result = parseInt(this.num1) + parseInt(this.num2)
            console.log("result igual a :",this.result)
            return parseInt(this.num1) + parseInt(this.num2)
        }
    }
});