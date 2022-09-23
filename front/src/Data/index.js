import {HiOutlineBookOpen, HiOutlineUserGroup, HiOutlineInformationCircle} from 'react-icons/hi';
import { IoTrophyOutline, IoSettingsOutline } from "react-icons/io5";
import {AksiPemuda, Buku, Lomba, Pengaturan, TentangKami} from './../Components/Menu/Index'

export const Kategori = [
    {
        nama:"Sosial",
        slug:"sosial",
        gambar:"https://img.freepik.com/free-vector/people-background-design_23-2147675587.jpg?w=740&t=st=1663027847~exp=1663028447~hmac=522091951413992fe972d7fadec55a86a770083d892a010c85f4ddf8a4736716"
    },
    {
        nama:"Umum",
        slug:"umum",
        gambar:"https://img.freepik.com/free-vector/hand-drawn-retro-microphone_23-2148158197.jpg?w=740&t=st=1663041538~exp=1663042138~hmac=4f006d89836d3d804184fdc5474bba554887b7fa28a5a1857294e2f347723acc"
    },
    {
        nama:"Kesehatan",
        slug:"kesehatan",
        gambar:"https://img.freepik.com/free-vector/self-care-concept-with-man-activities_23-2148530061.jpg?w=740&t=st=1663041612~exp=1663042212~hmac=35f0bd8b1a4f9e9dbf398c21c3cbd8ec21d0c3b4145885cfeba7a24a88910c3e"
    },
    {
        nama:"Pemuda",
        slug:"pemuda",
        gambar:"https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=740&t=st=1663041641~exp=1663042241~hmac=e4a503e53edd73b3110a6142add91e4d99648735c73555a41ff2c1474ad056e4"
    },
]

export const Menu = [
    {
        nama:"Perlombaan",
        slug:"perlombaan",
        icon:(<IoTrophyOutline fontSize={28}/>),
        element: <Lomba url={"perlombaan"}/>
    },
    {
        nama:"Buku",
        slug:"buku",
        icon:(<HiOutlineBookOpen fontSize={28}/>),
        element: <Buku url={"buku"}/>
    },
    {
        nama:"Aksi Kepemudaan",
        slug:"aksi-kepemudaan",
        icon:(<HiOutlineUserGroup fontSize={28}/>),
        element: <AksiPemuda url={"aksi-pemuda"}/>
    },
    {
        nama:"Tentang Kami",
        slug:"tentang-kami",
        icon:(<HiOutlineInformationCircle fontSize={28}/>),
        element: <TentangKami url={"tentang-kami"}/>
    },
    {
        nama:"Pengaturan",
        slug:"pengaturan",
        icon:(<IoSettingsOutline fontSize={28}/>),
        element: <Pengaturan url={"pengaturan"}/>
    }
]

export const postingan = [
    {   id:1,
        pengguna:"Hafi Ihza Farhana",
        photoUser:"https://media.istockphoto.com/photos/preacher-picture-id108199704?k=6&m=108199704&s=612x612&w=0&h=CO_pb4xh8oBIoXQ9z9Z_mynGch_b5SPTy4JScpKXdGI=",
        kategori: [
            {
                id:1,
                nama:"Sosial",
                slug:"sosial",
            },
            {   id:2,
                nama:"Umum",
                slug:"umum",
            }
        ],
        judul:"Pemuda ASEAN Haruslah Bertanggung Jawab",
        like:1000,
        komentar: [
            {
                idKomentar:1,
                namaPengguna:"Roman",
                photoUser:"https://i.pinimg.com/originals/a5/0a/7b/a50a7b2ec630d3915e7a7f14c6fb9ec1.jpg",
                pesan:"Ajib lah",
                tanggal:"04-09-2022"
            }
        ],
        waktu: "14-09-'2022",
        negara: "Indonesia",
        isi:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        kodeNegara:"ID" //untuk translate
    },
    {   id:2,
        pengguna:"Hafi Ihza Farhana",
        photoUser:"https://media.istockphoto.com/photos/preacher-picture-id108199704?k=6&m=108199704&s=612x612&w=0&h=CO_pb4xh8oBIoXQ9z9Z_mynGch_b5SPTy4JScpKXdGI=",
        kategori: [
            {
                id:1,
                nama:"Sosial",
                slug:"sosial",
            },
            {   id:2,
                nama:"Umum",
                slug:"umum",
            }
        ],
        judul:"Pemuda ASEAN Haruslah Bertanggung Jawab",
        like:1000,
        komentar: [
            {
                idKomentar:1,
                namaPengguna:"Roman",
                photoUser:"https://i.pinimg.com/originals/a5/0a/7b/a50a7b2ec630d3915e7a7f14c6fb9ec1.jpg",
                pesan:"Ajib lah",
                tanggal:"04-09-2022"
            }
        ],
        waktu: "14-09-'2022",
        negara: "Indonesia",
        isi:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        kodeNegara:"ID" //untuk translate
    },
    {   id:3,
        pengguna:"Hafi Ihza Farhana",
        photoUser:"https://media.istockphoto.com/photos/preacher-picture-id108199704?k=6&m=108199704&s=612x612&w=0&h=CO_pb4xh8oBIoXQ9z9Z_mynGch_b5SPTy4JScpKXdGI=",
        kategori: [
            {
                id:1,
                nama:"Sosial",
                slug:"sosial",
            },
            {   id:2,
                nama:"Umum",
                slug:"umum",
            }
        ],
        judul:"Pemuda ASEAN Haruslah Bertanggung Jawab",
        like:1000,
        komentar: [
            {
                idKomentar:1,
                namaPengguna:"Roman",
                photoUser:"https://i.pinimg.com/originals/a5/0a/7b/a50a7b2ec630d3915e7a7f14c6fb9ec1.jpg",
                pesan:"Ajib lah",
                tanggal:"04-09-2022"
            }
        ],
        waktu: "14-09-'2022",
        negara: "Indonesia",
        isi:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        kodeNegara:"ID" //untuk translate
    },
    {   id:4,
        pengguna:"Hafi Ihza Farhana",
        photoUser:"https://media.istockphoto.com/photos/preacher-picture-id108199704?k=6&m=108199704&s=612x612&w=0&h=CO_pb4xh8oBIoXQ9z9Z_mynGch_b5SPTy4JScpKXdGI=",
        kategori: [
            {
                id:1,
                nama:"Sosial",
                slug:"sosial",
            },
            {   id:2,
                nama:"Umum",
                slug:"umum",
            }
        ],
        judul:"Pemuda ASEAN Haruslah Bertanggung Jawab",
        like:1000,
        komentar: [
            {
                idKomentar:1,
                namaPengguna:"Roman",
                photoUser:"https://i.pinimg.com/originals/a5/0a/7b/a50a7b2ec630d3915e7a7f14c6fb9ec1.jpg",
                pesan:"Ajib lah",
                tanggal:"04-09-2022"
            }
        ],
        waktu: "14-09-'2022",
        negara: "Indonesia",
        isi:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        kodeNegara:"ID" //untuk translate
    }
]

export const penggunaLain = [
    {
        id:1,
        nama:"Andreawso",
        username:"Andrew",
        bio:"Anjay Mabar Hayyukkk",
        tanggalDaftar:"01-08-2022",
        negara:"Pakistan",
        kodeNegara:"PK",
        gender:"pria",
        noHP:"0812884",
        email:"adrew@gmail.com",
        password:"adrew345",
        fotoprofile:"https://www.hawtcelebs.com/wp-content/uploads/2017/04/zoey-deutch-at-flower-screening-at-2017-tribeca-film-festival-in-new-york-04-20-2017_2.jpg",
        postingan:[],
        postinganDisukai:[],
    },
    {
        id:2,
        nama:"Daymond Raymond",
        username:"Daron222",
        bio:"Ya ndak tau kok",
        tanggalDaftar:"12-03-2022",
        negara:"Indonesia",
        kodeNegara:"ID",
        gender:"pria",
        noHP:"081384",
        email:"Daymond@gmail.com",
        password:"Daron12345",
        fotoprofile:"https://millionsofcelebs.com/wp-content/uploads/2020/10/MV5BYTM0MTZmYzUtMjUyOC00ZGQ0LThmOGQtMThiYzUxMzU2NzA0XkEyXkFqcGdeQXVyNjI5MzIyMzE@._V1_-1024x1024.jpg",
        postingan:[],
        postinganDisukai:[],
    },
]


export const Negara = [
    {
        id:1,
        negara:"Indonesia",
        kodenegara:"ID",
        slug:"indonesia"
    },
    {
        id:2,
        negara:"Malaysia",
        kodenegara:"MY",
        slug:"malaysia"
    },
    {
        id:3,
        negara:"Laos",
        kodenegara:"LA",
        slug:"laos"
    },
    {
        id:4,
        negara:"Singapore",
        kodenegara:"SG",
        slug:"singapore"
    },
    {
        id:5,
        negara:"Myanmar",
        kodenegara:"MM",
        slug:"myanmar"
    },
    {
        id:6,
        negara:"Philippines",
        kodenegara:"PH",
        slug:"philippines"
    },
    {
        id:7,
        negara:"Cambodia",
        kodenegara:"KH",
        slug:"Cambodia"
    },
    {
        id:8,
        negara:"Vietnam",
        kodenegara:"Vn",
        slug:"vietnam"
    },
    {
        id:9,
        negara:"East Timor",
        kodenegara:"TL",
        slug:"east-timor"
    },
    {
        id:10,
        negara:"Brunei",
        kodenegara:"BN",
        slug:"Brunei"
    }
]