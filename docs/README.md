# Custom Bullets Diagramation
## :purple_heart: Info General 
Este repositorio contiene el componente personalizado *Bullets diagramation* e implementado con **React** y **Typescript** para **Vtex IO**. Su función principal es 
ayudar en la navegación por categorias de la tienda y esta representado por una lista de contexto con bullets.
### Imagen Principal


![image](https://user-images.githubusercontent.com/87923794/193958146-3189ade6-a0c0-4b07-aae5-e8c738b2d827.png)

## :wrench: Configuración
### Paso 1 - Clonación del repositorio
Primero se debe crear un nuevo repositorio que contiene el [Template-React](https://github.com/vtex-apps/react-app-template)

![image](https://user-images.githubusercontent.com/87923794/193940505-9b651d73-929d-4429-a90c-16be744f3dae.png)

Luego se debe clonar el repositorio creado, en tu Editor de Código preferido.

![image](https://user-images.githubusercontent.com/87923794/193941689-1edfa15e-09cd-47fd-b12c-29f2171ae302.png)

### Paso 2 - Editar el Manifest.json
Cuando ya tenga el repositorio clonado en su espacio de trabajo, debe configurar el **manifest.json**. Especificar los siguientes puntos:
 - vendor
 - name
 - version
 - title
 - description
 
 Ejemplo:
 
    {
      "vendor": "itgloberspartnercl",
      "name": "bullets-diagramation",
      "version": "0.0.1",
      "title": "Bullets Diagramation",
      "description": "Element context that renders lower levels of a bullets list with images"
    }
   
Además configurar la sección de **builders**, agregando la app store:

       {
          "builders": {
             "react": "3.x",
             "messages": "1.x",
             "docs": "0.x",
             "store": "0.x"
  }
       }

También chequear si la app requiere configuración en la sección de **dependencies**, por ejemplo:

    {   
      "dependencies": {
         "vtex.nombre-dependencia": "0.x",
	       "vtex.nombre-dependencia": "0.x"
		   }
    }
    
 **En este caso la app requiere dependencies** :
     
     {
        "dependencies": {
          "vtex.native-types": "0.x",
          "vtex.list-context": "0.x",
          "vtex.device-detector": "0.x",
          "vtex.css-handles": "0.x"
  }
     }
       
    
 ### Paso 3 - Editar el Package.json
 En esta parte se modificará el archivo de **`package.json` de alcance global**, por ejemplo:
 
    {
      "version": "0.0.1",
      "name": "bullets-diagramation"
	  }

Igualmente se modificará el archivo de **`package.json` de alcance local en este caso dentro del folder `React`**

### Paso 4 - Instalar dependencias en React
Ya configurado los pasos anteriores, se debe ingresar dentro del folder `react` e intalar las dependencias correspondientes, en este caso será `Yarn`

   `partner-name-componet/react> yarn`

### Paso 5 - Creación de folder Store
Se debe crear un folder a nivel global llamado `store` que contendrá un archivo llamado `interfaces.json`, el cual contiene lo siguiente: 

    {
     "bullets-diagramtion": {
      "component": "BulletsDiagramation",
      "render": "client"
     }
	  }

Al declarar esta información podremos llamar a nuestro componente desde nuestra app base o **store theme**

### Paso 6 - Creación de componente
Dentro de folder React se deberá crear un archivo `name-componente.tsx` ya que trabajaremos con React y Typescript

### Paso 7 - Ejecutar preview de tienda
:eyes: **Recomendación antes de linkear**: A travéz del comando `vtex whoami` nosotros podremos checkear si estamos logeados a nuestra cuenta partner, es importante revisar eso de antemano. Adicionalmente checkear que nos encontramos en nuestro `workspace` y no en `master`.

Siguiendo con el proceso, el comando `vtex link` nos permitirá vincular nuestros archivos locales con la plataforma `vtex`.

:pushpin:**NOTA**: Es recomendable siempre vincular primero tu app custom antes que tu tienda base.

Si el proceso se ejecuta sin ningún error, se mostrará el siguiente mensaje: Aplicación vinculada con éxito. 
Esto le permitirá ver los cambios aplicados en tiempo real, a través de la cuenta y el espacio de trabajo.

## :space_invader: Colaboradores
- Carolina Araya González
