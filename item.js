function load() {
    var a = localStorage.getItem("item");
    console.log(a)
    if (a == "Belts") {
        document.getElementById("item_image_label").innerHTML = "Belts";
        document.getElementById("item_image").src = "belt.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=mens+belts&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&source=lnms&biw=1280&bih=863";
    }
    else if (a == "Board Games") {
        document.getElementById("item_image_label").innerHTML = "Board Games";
        document.getElementById("item_image").src = "board games.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=mens+board+games&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&source=lnms&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Premium Pants") {
        document.getElementById("item_image_label").innerHTML = "Premium Pants";
        document.getElementById("item_image").src = "premium grey pant.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=men%27s+premium+pants&spell=1&sa=X&ved=0ahUKEwjNrfe00a-DAxVbEHAKHQDyDmQQBQjlCigA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Premium Shirts") {
        document.getElementById("item_image_label").innerHTML = "Premium Shirts";
        document.getElementById("item_image").src = "premium shirts.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=men%27s+premium+shirts&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=_BqMZcfwCJP8-Qb1j5DoBw&ved=0ahUKEwjH3oe20a-DAxUTft4KHfUHBH0Q4dUDCAg&uact=5&oq=men%27s+premium+shirts&gs_lp=Egtwcm9kdWN0cy1jYyIUbWVuJ3MgcHJlbWl1bSBzaGlydHMyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3ytQogZYlSlwAHgAkAEAmAFvoAGyCaoBAzUuN7gBA8gBAPgBAcICCBAAGIAEGLADwgIJEAAYCBgeGLADwgILEAAYCBgeGLADGArCAgcQABiABBgKwgIIEAAYFhgeGAqIBgGQBgc&sclient=products-cc";

    }
    else if (a == "Shoes") {
        document.getElementById("item_image_label").innerHTML = "Shoes";
        document.getElementById("item_image").src = "shoes1.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=men%27s+shoes&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=EhuMZYvGB-LS1e8Pvce4kAk&ved=0ahUKEwiLl8XA0a-DAxViafUHHb0jDpIQ4dUDCAg&uact=5&oq=men%27s+shoes&gs_lp=Egtwcm9kdWN0cy1jYyILbWVuJ3Mgc2hvZXMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBxAAGIAEGAoyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESPwUUABYshFwAHgAkAEAmAF-oAGRBKoBAzEuNLgBA8gBAPgBAYgGAQ&sclient=products-cc";

    }
    else if (a == "Boots") {
        document.getElementById("item_image_label").innerHTML = "Boots";
        document.getElementById("item_image").src = "shoes2.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=men%27s+boots&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=YxuMZdTZH__e1e8P8YWn0A4&ved=0ahUKEwiUl63n0a-DAxV_b_UHHfHCCeoQ4dUDCAg&uact=5&oq=men%27s+boots&gs_lp=Egtwcm9kdWN0cy1jYyILbWVuJ3MgYm9vdHMyChAAGIAEGIoFGEMyBRAAGIAEMgcQABiABBgKMgUQABiABDIFEAAYgAQyBRAAGIAEMgcQABiABBgKMgcQABiABBgKMgUQABiABDIFEAAYgARIzg5QvAxYvAxwAHgAkAEAmAFfoAG2AaoBATK4AQPIAQD4AQHCAggQABiABBiwA8ICChAAGIAEGLADGAqIBgGQBgo&sclient=products-cc";


    }
    else if (a == "Suits") {
        document.getElementById("item_image_label").innerHTML = "Suits";
        document.getElementById("item_image").src = "suits.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=men%27s+suits&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=bBuMZc7FAaPb1e8Pus63yAE&ved=0ahUKEwjOq7Tr0a-DAxWjbfUHHTrnDRkQ4dUDCAg&uact=5&oq=men%27s+suits&gs_lp=Egtwcm9kdWN0cy1jYyILbWVuJ3Mgc3VpdHMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBxAAGIAEGApI3SFQ4gRYqR5wAHgAkAEAmAFooAGhCKoBAzcuNLgBA8gBAPgBAcICDRAAGIAEGIoFGEMYsAPCAggQABiABBiwA8ICChAAGIAEGLADGArCAgoQABiABBiKBRhDiAYBkAYK&sclient=products-cc";

    }
    else if (a == "Toolkits") {
        document.getElementById("item_image_label").innerHTML = "Toolkits";
        document.getElementById("item_image").src = "toolkit.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=men%27s+toolkits&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=gBuMZcWKKqfS1e8P1c6t4AI&ved=0ahUKEwjFyqH10a-DAxUnafUHHVVnCywQ4dUDCAg&uact=5&oq=men%27s+toolkits&gs_lp=Egtwcm9kdWN0cy1jYyIObWVuJ3MgdG9vbGtpdHNI3h9QvgZYoxxwAHgAkAEAmAGJAaABzAeqAQMzLja4AQPIAQD4AQHCAg0QABiABBiKBRhDGLADwgIIEAAYgAQYsAPCAgoQABiABBiwAxgKwgIFEAAYgATCAgcQABiABBgKwgIHEAAYgAQYDcICCRAAGIAEGA0YCsICCxAAGB4YDRjWBRgPwgILEAAYBRgeGA0Y1gXCAgsQABgIGB4YDRjWBcICDRAAGAgYHhgNGNYFGA-IBgGQBgo&sclient=products-cc";

    }
    else if (a == "Wallets") {
        document.getElementById("item_image_label").innerHTML = "Wallets";
        document.getElementById("item_image").src = "wallet.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=mens+wallet&spell=1&sa=X&ved=0ahUKEwijzM6R0q-DAxWiZfUHHf2mBX4QBQjnBygA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Men's Watches") {
        document.getElementById("item_image_label").innerHTML = "Men's Watches";
        document.getElementById("item_image").src = "watch.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=mens+watches&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=vxuMZdqAE_zf1e8PyvOVmAI&oq=mens+wat&gs_lp=Egtwcm9kdWN0cy1jYyIIbWVucyB3YXQqAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj_sQJQ-htYw6oCcAJ4AJABAZgBtgGgAZ4KqgEDMi44uAEByAEA-AEBwgINEAAYgAQYigUYQxiwA8ICCBAAGIAEGLADwgIHEAAYgAQYDcICChAAGIAEGA0Y1gWIBgGQBgo&sclient=products-cc";

    }






    else if (a == "Cooking Equipments") {
        document.getElementById("item_image_label").innerHTML = "Cooking Equipments";
        document.getElementById("item_image").src = "cookingequipment.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+cooking+equipment&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=SxyMZfJT0t3V7w_-v57QCA&ved=0ahUKEwiypd7V0q-DAxXSbvUHHf6fB4oQ4dUDCAg&uact=5&oq=women%27s+cooking+equipment&gs_lp=Egtwcm9kdWN0cy1jYyIZd29tZW4ncyBjb29raW5nIGVxdWlwbWVudEjeF1DNDliLFHAAeACQAQCYAWWgAaYCqgEDMi4xuAEDyAEA-AEBiAYB&sclient=products-cc";

    }
    else if (a == "Dresses") {
        document.getElementById("item_image_label").innerHTML = "Dresses";
        document.getElementById("item_image").src = "dress.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+dresses&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=UhyMZZiRD872-Qbwi4fADA&ved=0ahUKEwiYgpjZ0q-DAxVOe94KHfDFAcgQ4dUDCAg&uact=5&oq=women%27s+dresses&gs_lp=Egtwcm9kdWN0cy1jYyIPd29tZW4ncyBkcmVzc2VzMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiOH1DGBFjzG3AAeACQAQCYAXCgAeoHqgEDNi40uAEDyAEA-AEBwgIHEAAYgAQYCogGAQ&sclient=products-cc";

    }
    else if (a == "Jewelry") {
        document.getElementById("item_image_label").innerHTML = "Jewelry";
        document.getElementById("item_image").src = "jewelry.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+jewelry&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=chyMZcCVJPL41e8PzaOhyA4&ved=0ahUKEwjAls7o0q-DAxVyfPUHHc1RCOkQ4dUDCAg&uact=5&oq=women%27s+jewelry&gs_lp=Egtwcm9kdWN0cy1jYyIPd29tZW4ncyBqZXdlbHJ5MgoQABiABBiKBRhDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIAOUABY3QpwAHgAkAEAmAF2oAHLBaoBAzUuMrgBA8gBAPgBAYgGAQ&sclient=products-cc";

    }
    else if (a == "Lipsticks") {
        document.getElementById("item_image_label").innerHTML = "Lipsticks";
        document.getElementById("item_image").src = "lipstick.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=women%27s+lipstick&spell=1&sa=X&ved=0ahUKEwj_xd6K06-DAxUMb_UHHdI0DmYQBQilDSgA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Makeup") {
        document.getElementById("item_image_label").innerHTML = "Makeup";
        document.getElementById("item_image").src = "makeup.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+makeup&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=vByMZYrrDtH61e8P6uKvuA8&ved=0ahUKEwiKud2L06-DAxVRffUHHWrxC_cQ4dUDCAg&uact=5&oq=women%27s+makeup&gs_lp=Egtwcm9kdWN0cy1jYyIOd29tZW4ncyBtYWtldXAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOcjUNkFWIogcAB4AJABAJgBbKABxguqAQQxMC41uAEDyAEA-AEBwgIIEAAYgAQYsAPCAgkQABgHGB4YsAPCAgkQABgIGB4YsAPCAgYQABgWGB7CAgcQABiABBgKiAYBkAYK&sclient=products-cc";

    }
    else if (a == "Perfumes") {
        document.getElementById("item_image_label").innerHTML = "Perfumes";
        document.getElementById("item_image").src = "perfumes.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=women%27s+perfume&spell=1&sa=X&ved=0ahUKEwjTu5-o06-DAxXZdPUHHVPXCmYQBQjVCygA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Purses") {
        document.getElementById("item_image_label").innerHTML = "Purses";
        document.getElementById("item_image").src = "purse.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=women%27s+purses&spell=1&sa=X&ved=0ahUKEwjR4_C906-DAxUUUfUHHYKzDf0QBQiwCSgA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Rings") {
        document.getElementById("item_image_label").innerHTML = "Rings";
        document.getElementById("item_image").src = "ring.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+rings&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=Jx2MZYz4Js-Ovr0Pjb6D-As&ved=0ahUKEwjMp_i-06-DAxVPh68BHQ3fAL8Q4dUDCAg&uact=5&oq=women%27s+rings&gs_lp=Egtwcm9kdWN0cy1jYyINd29tZW4ncyByaW5nczIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI3yJQ_wpYgCFwAXgAkAEAmAF2oAHDCaoBAzguNLgBA8gBAPgBAcICDRAAGIAEGIoFGEMYsAPCAggQABiABBiwA8ICBxAAGIAEGA3CAgoQABiABBgNGNYFwgIMEAAYgAQYDRjWBRgKwgIGEAAYCBgewgIIEAAYCBgHGB7CAgoQABiABBiKBRhDwgIHEAAYgAQYCogGAZAGCg&sclient=products-cc";
7
    }
    else if (a == "Sunglasses") {
        document.getElementById("item_image_label").innerHTML = "Sunglasses";
        document.getElementById("item_image").src = "sunglasses.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=women%27s+sunglasses&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=Nx2MZagG2Yj5BuTulqgI&ved=0ahUKEwjo_aHG06-DAxVZRN4KHWS3BYUQ4dUDCAg&uact=5&oq=women%27s+sunglasses&gs_lp=Egtwcm9kdWN0cy1jYyISd29tZW4ncyBzdW5nbGFzc2VzMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEinN1DLBlimNnACeACQAQCYAacBoAHHDKoBAzguN7gBA8gBAPgBAcICDRAAGIAEGIoFGEMYsAPCAggQABiABBiwA8ICChAAGIAEGIoFGEPCAgcQABiABBgKiAYBkAYK&sclient=products-cc";

    }
    else if (a == "Ladies' Watches") {
        document.getElementById("item_image_label").innerHTML = "Ladies' Watches";
        document.getElementById("item_image").src = "watches.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=women%27s+watches&spell=1&sa=X&ved=0ahUKEwj4gOX006-DAxUzUPUHHfDYDqgQBQjYCigA&biw=1280&bih=863&dpr=1";

    }






    else if (a == "Caps") {
        document.getElementById("item_image_label").innerHTML = "Caps";
        document.getElementById("item_image").src = "caps.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=kids+cap&spell=1&sa=X&ved=0ahUKEwjVpu341K-DAxURja8BHXpuDUAQBQjkCCgA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Headphones") {
        document.getElementById("item_image_label").innerHTML = "Headphones";
        document.getElementById("item_image").src = "headphones.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+headphones&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=yh6MZcDHFaCOvr0PgfKzoAU&ved=0ahUKEwjA1MyG1a-DAxUgh68BHQH5DFQQ4dUDCAg&uact=5&oq=kids%27+headphones&gs_lp=Egtwcm9kdWN0cy1jYyIQa2lkcycgaGVhZHBob25lczIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSI4SUKkIWKkIcAB4AJABAJgBaaABwwGqAQMxLjG4AQPIAQD4AQHCAg0QABiABBiKBRhDGLADwgIIEAAYgAQYsAOIBgGQBgo&sclient=products-cc";

    }
    else if (a == "Lego") {
        document.getElementById("item_image_label").innerHTML = "Lego";
        document.getElementById("item_image").src = "lego.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+lego&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=zh6MZYHGOr-Tvr0P74uR2AY&ved=0ahUKEwiB5eWI1a-DAxW_ia8BHe9FBGsQ4dUDCAg&uact=5&oq=kids%27+lego&gs_lp=Egtwcm9kdWN0cy1jYyIKa2lkcycgbGVnbzIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjmFVCaCFinEnAAeACQAQCYAW2gAYMEqgEDMi4zuAEDyAEA-AEBwgIJEAAYBxgeGLADiAYBkAYK&sclient=products-cc";

    }
    else if (a == "Puzzlesets") {
        document.getElementById("item_image_label").innerHTML = "Puzzlesets";
        document.getElementById("item_image").src = "puzzlesets.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=kids%27+puzzle+set&spell=1&sa=X&ved=0ahUKEwjY0pG-2q-DAxWuTWwGHdTHDnMQBQjlBygA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Robots") {
        document.getElementById("item_image_label").innerHTML = "Robots";
        document.getElementById("item_image").src = "robots.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&tbm=shop&q=kids%27+robot&spell=1&sa=X&ved=0ahUKEwjmnO_Q2q-DAxXcRmcHHY8oBCAQBQjvBigA&biw=1280&bih=863&dpr=1";

    }
    else if (a == "Room Decor") {
        document.getElementById("item_image_label").innerHTML = "Room Decor";
        document.getElementById("item_image").src = "roomdecor.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+room+decor&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=qSSMZayVNLnaseMPtLuquAk&ved=0ahUKEwjsjcPT2q-DAxU5bWwGHbSdCpcQ4dUDCAg&uact=5&oq=kids%27+room+decor&gs_lp=Egtwcm9kdWN0cy1jYyIQa2lkcycgcm9vbSBkZWNvcjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSK4eUMEFWKcbcAB4AJABAJgBeKABnwiqAQMyLji4AQPIAQD4AQHCAgkQABgHGB4YsAPCAgcQABgeGLADwgIFEAAYgATCAgkQABgeGA0Y1gXCAgYQABgeGA2IBgGQBgo&sclient=products-cc";

    }
    else if (a == "Science Kits") {
        document.getElementById("item_image_label").innerHTML = "Science Kits";
        document.getElementById("item_image").src = "sciencekits.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+science+kits&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=wiSMZfn6D7KeseMP2KWH0AI&ved=0ahUKEwj545Tf2q-DAxUyT2wGHdjSASoQ4dUDCAg&uact=5&oq=kids%27+science+kits&gs_lp=Egtwcm9kdWN0cy1jYyISa2lkcycgc2NpZW5jZSBraXRzMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiOLVClBVjBKXAAeACQAQCYAX6gAbIMqgEEMy4xMrgBA8gBAPgBAcICCRAAGAcYHhiwA8ICBRAAGIAEwgIKEAAYgAQYDRjWBcICCRAAGB4YDRjWBcICCBAAGBYYHhgKwgILEAAYCBgeGA0Y1gXCAgsQABgeGA0Y1gUYCogGAZAGCg&sclient=products-cc";

    }
    else if (a == "Sports") {
        document.getElementById("item_image_label").innerHTML = "Sports";
        document.getElementById("item_image").src = "sports.jpeg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+sports&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=2CSMZbqVNYugseMPktyo6AI&ved=0ahUKEwi64fjp2q-DAxULUGwGHRIuCi0Q4dUDCAg&uact=5&oq=kids%27+sports&gs_lp=Egtwcm9kdWN0cy1jYyIMa2lkcycgc3BvcnRzMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgKSP8lULoFWPMdcAF4AJABAJgBiQGgAdgGqgEDMi42uAEDyAEA-AEBwgIJEAAYBxgeGLADwgIHEAAYHhiwA8ICCRAAGAgYHhiwA4gGAZAGCg&sclient=products-cc";

    }
    else if (a == "Story Books") {
        document.getElementById("item_image_label").innerHTML = "Story Books";
        document.getElementById("item_image").src = "storybooks.jpg";
        document.getElementById("item_redirect_button").href = "https://www.google.com/search?q=kids%27+story+books&sa=X&sca_esv=593975244&rlz=1C1OKWM_enIN968IN968&biw=1280&bih=863&tbm=shop&ei=7CSMZfriC_6bseMP49-zwAU&ved=0ahUKEwj6iJTz2q-DAxX-TWwGHePvDFgQ4dUDCAg&uact=5&oq=kids%27+story+books&gs_lp=Egtwcm9kdWN0cy1jYyIRa2lkcycgc3RvcnkgYm9va3MyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAgYHjIGEAAYCBgeSNdRUO4SWNtOcAJ4AJABAJgBjgGgAa0NqgEEMS4xNLgBA8gBAPgBAcICCBAAGIAEGLADwgIJEAAYBxgeGLADwgIHEAAYHhiwA8ICBxAAGIAEGA3CAgoQABiABBgNGNYFwgIJEAAYHhgNGNYFwgIFEAAYgATCAggQABgIGAcYHsICBhAAGB4YDcICCxAAGAgYHhgNGNYFiAYBkAYK&sclient=products-cc";

    }
    else if (a == "Stuffed Animals") {
        document.getElementById("item_image_label").innerHTML = "Stuffed Animals";
        document.getElementById("item_image").src = "stuffedanimals.jpeg";
        document.getElementById("item_redirect_button").href = "";

    }
    localStorage.clear();
}









