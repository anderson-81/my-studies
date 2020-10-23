var methods = {}

this.title = 'Módulo Inicial'

methods.greeting = (name) => {
    return(`Hello, ${name}!`)
}

// Exportando um ou mais itens do módulo.
exports.data = methods
exports.version = 'Version v1.0'