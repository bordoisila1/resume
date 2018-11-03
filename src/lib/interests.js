import React from 'react'

const getInterestId = (path) => path.slice(1)

let interests = [
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. sdaDADAFSDAFS sadadasdas Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "a justo, dapibus nec purus nec, rhoncus posuere augue a justo, dapibus nec purus nec, rhoncus posuere augue Proin accumsan nec justo eget imperdiet.",
        label: "Tea",
        path: "/tea",
        url: "",
        tags: [],
        leftImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHACDxsxy019b6VLA_E0fZdte9a1X7oXBPgg445Iz3JOHkDjbQ2g",
        alt: "Logo of tea",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "gna maximu mollis lectus ut tr",
        label: "Biking",
        path: "/biking",
        url: "https://www.citibikenyc.com/",
        tags: [],
        leftImage: "https://d21xlh2maitm24.cloudfront.net/nyc/01unlock2.JPG?mtime=20160428123800",
        alt: "Logo of Citibike",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "gna maximus, mollis lectus ut, tr",
        label: "Books",
        path: "/books",
        url: "",
        tags: [],
        leftImage: "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=338&ext=jpg",
        alt: "Logo of books",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "c, ornare massa. Proin accumsan nec justo",
        label: "Music",
        path: "/music",
        url: "",
        tags: [],
        leftImage: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/578650fe544c4.jpg",
        alt: "Logo of music",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "Programming",
        label: "Programming",
        path: "/programming",
        url: "",
        tags: [],
        leftImage: "https://www.class-central.com/bundles/classcentralsite/images/icon-programming-and-software-development.png",
        alt: "Logo of programming",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "Guitars",
        label: "Guitars",
        path: "/guitars",
        url: "",
        tags: [],
        leftImage: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-8ddb83907276bbcf__hmac-6ad6119bc41cc0f2ed2cbb2567235e35f91807fb/images/closeup/750-GRX20ZBKN_detail1.jpg.auto.webp",
        alt: "Logo of Guitar",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    ,
    {
        title: "c, ornare massa. Proin accumsan nec justo",
        label: "Music",
        path: "/music",
        url: "",
        tags: [],
        leftImage: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/578650fe544c4.jpg",
        alt: "Logo of music",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "Programming",
        label: "Programming",
        path: "/programming",
        url: "",
        tags: [],
        leftImage: "https://www.class-central.com/bundles/classcentralsite/images/icon-programming-and-software-development.png",
        alt: "Logo of programming",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "Guitars",
        label: "Guitars",
        path: "/guitars",
        url: "",
        tags: [],
        leftImage: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-8ddb83907276bbcf__hmac-6ad6119bc41cc0f2ed2cbb2567235e35f91807fb/images/closeup/750-GRX20ZBKN_detail1.jpg.auto.webp",
        alt: "Logo of Guitar",
        description: "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"},
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
    {
        title: "magna maximus, mollis lectus ut, tristique nulla. Nunc  Proin accumsan nec justo eget imperdiet.",
        label: "History",
        path: "/history",
        url: "",
        tags: [],
        leftImage: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description : "<p>Morbi faucibus turpis quis dui congue, quis fri" +
        "ngilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
        + "<img class='img-fluid rounded float-left' src='/images/cas_logo.jpg'/> " +
        "<p>facilisis quam vitae, aliquam erat. Sed sit amet neque et odio tincidunt eleifend. " +
        "Integer quis dolor mattis, tempus nibh id, luctus nunc. Duis rhoncus," +
        " metus et vulputate varius, ex augue fringilla leo, at aliquet odio an" +
        "te non tellus. Phasellus tincidunt, erat eget tempus pulvinar, massa u" +
        "rna fermentum ex, vitae luctus augue elit et nulla. In volutpat, torto" +
        "r ut faucibus faucibus, dui quam venenatis ante, sit amet sagittis nun" +
        "c metus quis ex. Aliquam ex odio, vulputate congue lacus vel, malesuad" +
        "a egestas lacus. Donec mauris elit, molestie sit amet diam quis, venen" +
        "atis gravida augue. Sed nec mauris id felis semper dictum. Donec vel e" +
        "ros nisl. Etiam eu feugiat mi. Proin pharetra pretium eros a pretium. " +
        "Quisque eget orci risus.</p>"
        + "<p>Morbi faucibus turpis quis dui congue, quis fringilla tellus " +
        "venenatis. Suspendisse risus metus, scelerisque in sapien ac, " +
        "ultrices iaculis est. Sed vel nunc tempus, condimentum tellus a" +
        "c, ornare massa. Proin accumsan nec justo eget imperdiet." +
        " Praesent faucibus dapibus justo in rutrum. Nunc vitae " +
        "magna maximus, mollis lectus ut, tristique nulla. Nunc " +
        "massa justo, dapibus nec purus nec, rhoncus posuere augue. Phasellus" +
        " porttitor rutrum metus non condimentum. Quisque luctus laoreet enim," +
        " non consequat mi porta sit amet. Integer ultricies congue posuere. " +
        "Sed felis purus, eleifend porttitor hendrerit in, mattis nec elit. " +
        "Nam porttitor consequat dui quis consectetur. Ut fringilla sollicitudin t" +
        "urpis, nec mollis lectus pulvinar pharetra. Sed lobortis quam nec im" +
        "perdiet consequat.\n" +
        "\n" +
        "Mauris a neque pharetra, </p>"
    },
];

interests.map((interest) => {
    interest["interestId"] = getInterestId(interest["path"])
})

export default interests;