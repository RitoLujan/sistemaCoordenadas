# Webcoordenadas

Requisitos

Para ejecutar este proyecto, necesitas tener los siguientes requisitos instalados en tu computadora:

Node.js versión 16 o superior
NPM versión 8 o superior
Angular CLI versión 16.2.10
Instalación de Angular CLI

Para instalar Angular CLI versión 16, ejecuta el siguiente comando:

`npm install -g @angular/cli@16.2.10`
Este comando instalará Angular CLI globalmente en tu sistema.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Agregar las ubicaciones predeterminadas con una función
subir() {
      set(ref(getDatabase(), 'ubicacion/'),
        [{ lat: 24.528492, lng: -104.771853, title: 'DIF', description: 'Carrillo Puerto y Francisco I. Madero, Col. El Saracho', capacidad: 100,  estado: 'Disponible' , ocupado: 0 },
        { lat: 24.525574, lng: 104.774212, title: 'Albergue Jornaleros Agrícolas', description: 'Ave.  ferrocarril s/n, entre calle mina y zaragoza, Col. Centro, a un costado de la maquila y atrás del hospital', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.527523, lng: -104.778049, title: 'Primaria Lázaro Cárdenas', description: 'C. Hidalgo s/n entre Lerdo de Tejada y Cuauhtémoc, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.521001, lng: -104.778972, title: 'Secundaria Mariano Balleza', description: 'Avenida Mariano Balleza entre avenida presidio y C. Manuel I. Rodríguez, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.454845, lng: -104.712758, title: 'Secundaria Emiliano Zapata', description: 'J. Guadalupe Aguilera', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.474689, lng: -104.740831, title: 'ESTV 002 Manuel M. Celis', description: 'San José de Gracia', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.52427, lng: -104.774755, title: 'COBAED', description: 'Avenida Ferrocarril esquina con Calle Zaragoza, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.121673, lng: -106.54525, title: 'Albergue Municipal', description: 'Pilar de zaragoza, Zona Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.979912, lng: -104.769620, title: 'Albergue Comunitario', description: 'El Agostadero Coneto de Comonfort, Durango', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.523668, lng: -104.748847, title: 'Auditorio de la Asociación Ganadera', description: 'Cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.872404, lng: -103.70119, title: 'Estación de Bomberos', description: 'Calle Libramiento esq. Con Constitución s/n, Col. Centro cp. 35805, Cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.101823, lng: -104.573724, title: 'Escuela primaria Ignacio Zaragoza', description: 'Calle Ignacio Zaragoza y Francisco Zarco s/n., Localidad 5 de mayo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.047289, lng: -104.663137, title: 'Albergue', description: 'C. Esmeralda s/n esquina mina de Tayoltita, Frac. Acereros', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.031357, lng: -104.680279, title: 'Albergue Municipal DIF', description: 'Blvd. Dolores del Rio s/n, Col. Obrera', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.032014, lng: -104.655304, title: 'Albergue Indígena', description: 'Blvd. Alberto Terrones #209, Col. Fátima', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.002162, lng: -104.675045, title: 'La comunidad', description: 'Calle Tenochtitlán #505, Col. IV Centenario', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.993108, lng: -104.660062, title: 'Casa Comunitaria', description: 'Calle Otilia González #503, Col. Azteca', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.061577, lng: -104.60086, title: 'Centro de Formación y Desarrollo Integral de la familia Oriente', description: 'Avenida del Hierro s/n, Frac. Fidel Velázquez I y II', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.004696, lng: -104.675256, title: 'Centro de formación y desarrollo para la familia Francisco Villa', description: 'Calle jardines s/n esquina Primero de Mayo, Col. Francisco Villa', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.04081, lng: -104.620445, title: 'María Del Rosario Guzmán Ramírez', description: 'Calle Ágata s/n, Frac. Joyas del Valle', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.00845, lng: -104.681686, title: 'Albergue, (para personas indígenas)', description: 'Calle Rio Atoyac #311, Col. Valle del Sur', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.02778, lng: -104.643817, title: 'CONADE', description: 'H. Colegio Militar s/n, cp. 34000, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.02761, lng: -104.67153, title: 'Yo soy tambitos, a.c.', description: 'Calle Bruno Martínez No. 140 entre Aquiles Serdán y Coronado, cp. 34000, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.95047157, lng: -105.364229, title: 'Escuela primaria Federal club activo 20-30', description: 'Santa Barbara No. 17A 35690, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.950208, lng: -105.3641179, title: 'Casa de la Cultura municipal', description: 'Avenida Juárez No. 80, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.95035, lng: -105.36423, title: 'Albergue', description: 'Calle Hidalgo No. 52, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.688799, lng: -103.226248, title: 'Auditorio Municipal', description: 'Calle Álvaro Obregón s/n, cp. 35950, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.688344, lng: -103.22622, title: 'Albergue escolar', description: 'Calle Álvaro Obregón s/n, cp. 35950, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.60127, lng: -103.476468, title: 'Albergue Jornaleros Agrícolas Miguel de la Madrid', description: 'Calle Geranios s/n, entre Blvd. San Carlos y Valencia, y Gladiolas, Fraccionamiento Residencial Campanario', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.56857, lng: -103.501379, title: 'Gimnasio Luis Vargas', description: 'Av. Javier mina entre independencia y Santiago Lavín, Col. Centro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.58171, lng: -103.475001, title: 'Centro de Convenciones', description: 'Blvd. Ejército Mexicano km 3.5, Fraccionamiento La Feria', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.44671, lng: -104.124, title: 'Auditorio Luis Donaldo Colosio', description: 'Calzada Agustín Castro s/n, cp. 34700. Zona Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.456361, lng: -104.125082, title: 'Casa Pastoral Juan Pablo II', description: 'Jiménez 1227, C.P. 34700, Isidro de Flores, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.439807, lng: -104.12187, title: 'Asilo de Ancianos', description: 'Niños Héroes de Chapultepec 180, C.P. 34700, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.445464, lng: -104.124143, title: 'DIF Municipal', description: 'Ignacio Allende No. 210, Col. El Hormigón, CP. 34700', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.93120193, lng: -105.9545593, title: 'Presidencia Municipal', description: 'Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.93191, lng: -105.954056, title: 'Salón Ejidal', description: 'Comunidad Arroyo de Lajas', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.12917, lng: -106.332222, title: 'Refugio la rosilla', description: 'Comunidad La Rosilla, Guanaceví, Durango', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.25151, lng: -104.9129839, title: 'Casa Río', description: 'C. Independencia s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.05291, lng: -105.250383, title: 'Albergue Jornaleros Agrícolas', description: 'Comunidad, la puerta de cabrera, Inde', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.912913, lng: -105.221614, title: 'Auditorio Municipal', description: 'C. Allende s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.821125, lng: -105.1251, title: 'Salón Ejidal', description: 'Domicilio Conocido s/n, localidad Rancho Nuevo, Inde Durango', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.33459, lng: -103.30426, title: 'Gimnasio Auditorio Municipal', description: 'Boulevard Miguel Alemán s/n, Colonia Magisterial', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.600036, lng: -103.4744358, title: 'Albergue Jornaleros Agrícolas León Guzmán', description: 'Col. San Juan de Casta, Villa León Guzmán, Col. San Juan de Casta, Villa León Guzmán', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.487915, lng: -103.594536, title: "CENTRO Comunitario 'JUÁREZ'", description: 'Centro Ciudad Juárez', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.33535, lng: -103.25565, title: "Centro Comunitario 'NAZARENO'", description: 'Centro Villa Nazareno', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.83335, lng: -103.847766, title: "Albergue Jornaleros Agrícolas 'Ceballos'", description: 'C. Hidalgo #1, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.526397, lng: -104.129201, title: 'Biblioteca Pública Municipal', description: 'C. 16 de septiembre No. 834 cp. 35210, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.525196, lng: -104.128802, title: 'Casa de la Cultura', description: 'Calle Independencia s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.526066, lng: -104.129686, title: 'DIF de Ceballos', description: 'C. Cuauhtémoc No. 255 cp. 35210, Localidad de Ceballos, Mapimí', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.4768, lng: -104.391471, title: 'DIF Municipal', description: 'Domicilio Conocido s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.480647, lng: -104.39024, title: 'Jornaleros Agrícolas', description: 'C. Porfirio Díaz s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.473462, lng: -104.396832, title: 'Auditorio Municipal', description: 'C. Zaragoza s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.22725, lng: -104.114444, title: 'Pista municipal', description: 'Ave. Allende; calle 5 señores y san Antonio s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.218596, lng: -104.112063, title: 'Comedor Comunitario', description: 'Vicente Guerrero 811, Col. Valle Verde', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.849025, lng: -104.244545, title: 'Auditorio Municipal', description: 'Calle Victoria #206, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.88551, lng: -105.075355, title: 'Albergue DIF Municipal', description: 'C. 5 de mayo # 803, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.44126, lng: -105.5079, title: 'Albergue', description: 'Nellie Campobello s/n, Villa Ocampo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.44199, lng: -105.511993, title: 'Auditorio municipal', description: 'Nellie Campobello s/n, Villa Ocampo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.44134, lng: -105.507551, title: 'Salón ejidal', description: 'Arnoldo Cabada de la O. s/n, Villa Ocampo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.40512, lng: -105.390252, title: 'CECYTED 01', description: 'Ciprés s/n, las Nieves', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.40102, lng: -105.38797, title: 'DIF', description: 'Juárez s/n, las Nieves', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.39684, lng: -105.391029, title: 'Salón ejidal', description: '16 de septiembre s/n, Las Nieves', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.37483, lng: -105.375001, title: 'CBTA 149', description: 'Lázaro Cárdenas s/n, Canutillo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.38367, lng: -105.368485, title: 'Hacienda', description: '20 de noviembre s/n, Canutillo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.50117, lng: -105.641968, title: 'Estación del ferrocarril', description: 'Ave. Ferrocarril s/n, Orestes Pereyra', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.69994, lng: -105.995457, title: 'Tesorería municipal', description: 'Domicilio Conocido s/n cp. 34650, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.40112, lng: -104.319075, title: 'Auditorio Municipal', description: 'Calle Francisco Sarabia #765, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.39964, lng: -104.3180244, title: 'Refugio DIF', description: 'Francisco Sarabia s/n c.p.34770, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.792135, lng: -104.03467, title: 'Escuela primaria Vicente Guerrero', description: 'Francisco Sarabia s/n c.p.34770, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.97188, lng: -104.043712, title: 'Antiguas instalaciones del hospital municipal', description: 'Calle Colón s/n, Col. El Refugio', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.77728, lng: -105.360904, title: 'Albergue de la tercera edad', description: 'Avenida Ferrocarril s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.77731, lng: -105.3603741, title: 'Sindicato de los tres poderes', description: 'Avenida Ferrocarril s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.77787, lng: -105.3626625, title: 'Club de Leones', description: 'Calle Independencia s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.7692, lng: -105.3636788, title: 'Albergue Municipal', description: 'Domicilio Conocido s/n, Col. El Aterrizaje', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.78605, lng: -105.3654728, title: 'Instituto tecnológico del salto', description: 'C. Mesa del tecnológico, Col. La Forestal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.18178, lng: -104.558465, title: 'Base de Protección Civil y Bomberos', description: 'C. Miguel Hidalgo No. 550, Col. Hidalgo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.17763, lng: -104.5591231, title: 'Albergue DIF', description: 'Blvd. Maximiliano Silerio Esparza s/n Carretera panamericana km 160+200, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.17033, lng: -104.554447, title: 'Auditorio Municipal', description: 'C. Francisco Sarabia s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.00035, lng: -105.522592, title: 'DIF municipal', description: 'Calle Juárez esq. Con calle zaragoza s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.000867, lng: -105.52327, title: 'Base de Protección Civil', description: 'Calle Juárez Esq. Con Morelos s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.41239, lng: -105.837356, title: 'Casa de la Cultura', description: 'Comunidad San Miguel de Cruces', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.76161, lng: -105.74145, title: 'Esc. Primaria Benito Acosta', description: 'Comunidad Neveros', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.09567, lng: -105.661444, title: 'Gimnasio Municipal', description: 'Comunidad San Luis Villa Corona', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.42716, lng: -105.712847, title: 'Secundaria', description: 'Comunidad Vencedores', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.428733, lng: -105.712517, title: 'Auditorio Municipal', description: 'Comunidad Vencedores', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.10333, lng: -105.930041, title: 'Iglesia', description: 'Comunidad Tayoltita', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.10216, lng: -105.931391, title: 'DIF municipal', description: 'Comunidad Tayoltita', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.31636, lng: -105.9718222, title: 'Albergue alumnos', description: 'Comunidad Puentecillas', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.63824, lng: -102.778111, title: 'Albergue Juvenil, Domicilio Conocido s/n Col. Centro', description: 'Ave. San Pedro s/n, Col. Centro, cabecera municipala', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.630532, lng: -102.782158, title: 'Presidencia Municipal', description: 'C. Marfil No. 18 cp. 35900, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.63818, lng: -102.77815, title: 'Escuela Secundaria Elpidio G. Velázquez', description: 'C. Marfil No. 66 cp. 35900, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.778855, lng: -104.46057, title: 'Gimnasio los Dorados', description: 'Carretera a San Juan del Río, la ETA, 34488, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.41641, lng: -104.2753543, title: 'Casa hogar DIF', description: 'Calle Nicolás Bravo y Ave. 5 de mayo, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.41776, lng: -104.27773, title: 'Auditorio Municipal', description: 'Avenida Hidalgo s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.5662, lng: -104.293543, title: 'Salón Ejidal Santo Domingo', description: 'Ejido de Santo Domingo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.47117, lng: -103.3516822, title: 'Salón Ejidal', description: 'Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.05432, lng: -105.424424, title: 'Base protección civil municipal y amigos al rescate', description: 'Blvd. José Antonio Ramírez #301, Col. La Esperanza', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.048503, lng: -105.418626, title: 'Sub-Estación de Protección Civil', description: 'C. Niños Héroes s/n, Col. José María Morelos y Pavón, localidad de Chinacates, Santiago Papasquiaro', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.04024, lng: -105.419125, title: 'Casa de la cultura', description: 'Calle Dr. Barraza no. 4, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.04279, lng: -105.422243, title: 'DIF municipal', description: 'Calle Petronilo Hernández no. 712, Col. Lomas de la cruz', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.03841, lng: -105.4274, title: 'Auditorio Municipal', description: 'Parque zaragoza s/n, Col. El Pueblo', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.62422, lng: -103.933103, title: 'CECYTYED', description: 'Calle Guadalupe Rodríguez s/n, Col. El Pilancón', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.62152, lng: -103.922527, title: 'Escuela primaria Mauricio Fernández de Castro', description: 'Avenida Del trabajo # 105, entre ave. 5 de mayo y Francisco González de la Vega, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.618992, lng: -103.93426, title: 'Salón Ejidal', description: 'C. del Trabajo s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.58114, lng: -106.580373, title: 'Albergue COBAED plantel 13', description: 'C. Constitución esq. Con independencia s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.97029, lng: -106.966969, title: 'Albergue Luis Donaldo Colosio', description: 'Domicilio Conocido s/n, Calle constitución enfrente de secundaria, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 24.964884, lng: -106.935347, title: 'Albergue Mano Amiga Universidad Tecnológico Tamazula', description: 'C. Constitución s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.34323, lng: -105.7241139, title: 'El conquistador', description: 'General Eduardo Arrieta esq. Con Patoni s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.33912, lng: -105.725138, title: 'Margarita Maza de Juárez', description: 'Agricultura esq. con centenario, Col. Del Valle', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 26.10566, lng: -103.439679, title: 'Escuela Secundaria Lázaro Cárdenas del río', description: 'Calle Emiliano Zapata s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.20895, lng: -106.569912, title: 'CBTIS# 112', description: 'Calle Aviación s/n, Col. Centro, cabecera municipal", "Avenida Hidalgo s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.21195, lng: -106.572657, title: 'Escuela Secundaria Técnica #42', description: 'Calle Emiliano Zapata s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.21175, lng: -106.572284, title: 'Albergue Escolar', description: 'C. Fanny Anitua s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 25.21163, lng: -106.571256, title: 'Escuela primaria', description: 'Domicilio Conocido s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.73089, lng: -103.983273, title: 'Casa de la cristiandad', description: 'Alfredo salinas 212, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.73484, lng: -103.97943, title: 'Auditorio Vicente Guerrero', description: 'Blvd. De las Rosas No. 306, Col. CNOP', capacidad: 100, estado: 'Disponible' , ocupado: 0 },
        { lat: 23.71943, lng: -103.9746571, title: 'IMSS Albergue Comunitario', description: 'Calle Cinco de Febrero s/n, Col. Centro, cabecera municipal', capacidad: 100, estado: 'Disponible' , ocupado: 0 },]);
    }
