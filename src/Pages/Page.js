import Toggler from "../ThemeToggler/Toggler";
import context from "../Context/context";
import {useContext} from "react";
import colors from "../ThemeData/colors"



const Page =()=>{

  const {themeMode, setThemeMode} = useContext(context);

  
  let currentTheme = colors.light;
  if (themeMode === "light"){
    currentTheme = colors.light
  }
  else{
    currentTheme = colors.dark
  };
  console.log(currentTheme);

  return(
    <div className="page" style={currentTheme}>
      <h1>Current theme is {themeMode}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad vero facere mollitia voluptatem sit, vel suscipit ab, maxime saepe veniam voluptatibus, ipsum dolores libero? Pariatur exercitationem accusamus sit quos officiis, nobis esse natus eaque quae hic qui sapiente dicta omnis optio, ipsa doloribus maiores, quaerat beatae. Inventore, cupiditate odio omnis, distinctio adipisci maiores optio asperiores dolore enim obcaecati dolores dolorum quam deleniti. Neque, cumque ipsa! Quia quas unde deserunt hic optio voluptate mollitia explicabo ab quasi, sit voluptatum dolores atque, magni voluptatem ratione esse ut eaque. Dolorem ut corporis debitis dolorum rem beatae quaerat, corrupti molestiae quasi sequi quos vitae delectus aliquam doloremque vel ratione enim ab et assumenda repudiandae soluta facilis asperiores amet non. In saepe nemo voluptate ipsam veritatis omnis eos, vero, necessitatibus eius, enim neque. Laborum ad culpa minus deserunt quibusdam autem, molestiae accusantium. Sequi ea vero excepturi corporis. Unde pariatur deserunt, sint iste voluptatum officia fugit quisquam nobis ipsum ipsa inventore quasi dolores ex doloremque, autem earum quod non a facere delectus necessitatibus ab impedit et. Doloribus quisquam nesciunt nobis ut perferendis fuga, mollitia laboriosam? Cupiditate omnis earum et dolore aliquam libero laboriosam, quisquam, consectetur, quam fugiat qui rem officia. Voluptatem explicabo hic eligendi dignissimos id odit, dolorum assumenda fuga repellendus neque officia fugit vel optio nihil omnis porro accusantium similique atque exercitationem. Quos, id ullam. Sequi molestias possimus rem voluptas earum vero a vitae modi? Qui obcaecati in voluptas, corrupti totam ipsam ad cum perferendis doloremque, omnis similique consequuntur laboriosam delectus distinctio incidunt voluptate hic vitae maxime accusantium dolore officia. Molestias rerum quod in, tempora, cumque exercitationem labore quas at ullam saepe magnam totam aliquam vero, eaque corporis ea adipisci unde! Ipsa aut esse voluptates eius modi voluptas, quae voluptatibus! Iure eligendi reprehenderit harum a nobis quis maxime iste distinctio ut assumenda quibusdam atque, quo repellat! Sapiente expedita id aliquid pariatur molestias atque, illo quaerat natus nemo, omnis at dignissimos, mollitia incidunt ab vero facere! Veniam facilis explicabo corrupti quos in maxime earum temporibus ut provident, molestias fugit ea eveniet eum dolore perspiciatis possimus debitis aliquam ad laboriosam enim est! Fugiat molestias necessitatibus ut ea quaerat? Harum quos aperiam odio! Quis natus voluptas minus deserunt, accusamus ducimus similique alias sed fuga quidem consequatur rem ad dicta beatae corrupti eveniet non, necessitatibus, fugiat distinctio vero. Sit, magni officiis esse voluptatum totam dolorum nulla! Ut in incidunt quod, ex nisi laboriosam aperiam beatae explicabo quia. Beatae!
      <Toggler/>
    </div>
  )
};

export default Page;