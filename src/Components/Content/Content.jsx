import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex justify-center p-10 flex-col gap-5">
        <motion.a
          href="https://docs.google.com/document/d/1Z-JGsy2v91F-k2luyEaCJZkk47H7LRUNhaZeQ1x-ZJs/edit?tab=t.0"
          className="h-20 w-full bg-sky-400 border-blue-400 rounded-xl text-2xl text-white flex justify-center items-center font-bold mt-16 p-5"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            scale: 0.5,
            boxShadow: "0 0 36px rgba(0,0,0,.8)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,.8)",
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: false }}
          whileHover={{
            scale: 1.025,
            boxShadow: "0 0 36px rgba(0,0,0,.8)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            },
          }}
        >
          📃 Our Tesis Paper
        </motion.a>

        <div className="h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 flex flex-col items-center p-5 gap-5">
          <h1 className="text-white text-4xl font-extrabold">PeLaMar</h1>
          <div>
            <p className="text-md text-white ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              culpa, eos nemo pariatur non quod labore fugiat officia esse
              voluptas eum molestiae unde iusto inventore architecto iste itaque
              nulla ullam sequi delectus beatae deserunt obcaecati illo. Magnam
              explicabo numquam, quisquam facilis error officiis necessitatibus
              vero rerum delectus ad fugit ex et modi, quasi esse? Illum
              eligendi est repudiandae, cumque dolorum voluptatum! Expedita,
              sequi repudiandae? Quibusdam quis laborum commodi autem facere,
              culpa inventore, dolore mollitia voluptatum nesciunt vitae quia et
              eos consectetur tempora perferendis. Culpa nesciunt eveniet
              aliquid molestiae quis eos consectetur iusto commodi debitis eius
              ea nisi doloribus autem, explicabo non ad quaerat reprehenderit
              error cumque fugiat beatae. Quod, porro! Pariatur soluta quidem
              nesciunt perspiciatis laboriosam voluptas unde ab voluptates
              eveniet suscipit tempora ex, repudiandae quos, accusamus numquam,
              libero velit cum magni! Delectus sit temporibus aliquam quod
              accusamus sed dolorem tenetur reiciendis! Repellat ipsam
              temporibus atque. Eveniet repellendus ipsum sit fugit ut facilis
              quisquam odit veritatis, quia quas necessitatibus omnis dolores
              soluta a fugiat, deleniti ipsam aperiam quos error voluptas optio
              expedita laborum! Eveniet fugiat odit eaque mollitia libero!
              Quaerat vero fugiat illo, illum eaque possimus obcaecati veritatis
              eligendi, optio autem culpa tenetur aliquam? Doloribus, ad facere
              laudantium magnam animi debitis cupiditate aliquam nisi fugiat
              fuga dicta eius! Odit magni quibusdam sunt fugit deleniti tempora
              atque quam consequatur iusto error. Vitae iste asperiores placeat
              eos minima. Voluptate rerum nostrum natus qui ipsa at repudiandae
              mollitia magnam doloribus libero molestiae, nisi ducimus sed in
              eveniet, sequi quos ratione modi reprehenderit quo suscipit alias
              voluptatum et? Dolores ducimus soluta dignissimos enim error sit,
              nostrum reprehenderit sunt neque consectetur, deleniti eum
              veritatis voluptate unde id reiciendis! Esse eligendi deleniti
              accusantium corporis, libero, enim quaerat cumque nulla,
              dignissimos nostrum ipsum reiciendis ad. Ab illum, asperiores
              praesentium animi veritatis vero? Nisi rem cum tenetur officiis
              quibusdam et modi labore! At, dolorum labore. Vel eaque iusto
              veritatis. Ratione officia assumenda odio excepturi enim eligendi
              temporibus est, veniam maiores mollitia molestias quos saepe neque
              veritatis, vitae quo facilis itaque. Maiores voluptatibus tempore
              facere temporibus aliquam. Cupiditate delectus harum distinctio
              soluta omnis quis tempora labore earum perferendis eum repellat
              optio aliquam dolorem corrupti sint, enim odit incidunt velit ea
              nulla quos nisi error vitae nostrum! Expedita saepe assumenda
              temporibus id optio, repudiandae ut. Magnam temporibus illo quas
              culpa tempore rerum consequatur ipsa, placeat odit aspernatur,
              adipisci sunt consequuntur deserunt explicabo reiciendis assumenda
              vitae autem veritatis, voluptate commodi perspiciatis iusto! Fugit
              repudiandae ad, dolorem officia corrupti qui et doloribus ex
              commodi officiis rerum perferendis est fuga similique laudantium
              voluptas maxime nihil repellat totam repellendus. Enim quis,
              accusamus impedit illo rem, a eos dignissimos voluptatibus
              necessitatibus unde, praesentium veritatis sint quaerat iusto
              perspiciatis? Harum delectus praesentium rem, repudiandae
              cupiditate a veritatis architecto esse voluptatibus totam quam
              dolor quas, id aliquam. Laborum, officiis reprehenderit cum harum
              eligendi nemo natus sit at corrupti unde ipsum nesciunt
              exercitationem repudiandae quo illum repellat? Cumque vitae illo
              rem facilis animi, vero ullam a, exercitationem, voluptatibus
              eligendi accusamus fugiat nemo nam iure error aliquam labore
              commodi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
