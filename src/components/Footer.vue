<script setup></script>

<template>
  <footer
    class="bg-dark-pink/10 text-white py-10 text-center flex flex-col justify-center items-center"
  >
    <div class="container mx-auto text-center grid grid-cols-2">
      <div class="flex flex-col justify-center items-center gap-2">
        <h3 class="text-xl font-titles font-semibold">Nuestra Ubicación</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59733.07803458196!2d-87.12127084299104!3d20.656663024935536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e4323d22d4e61%3A0xe8c10b783bab4adc!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo!5e0!3m2!1sen!2smx!4v1746756022560!5m2!1sen!2smx"
          width="600"
          height="450"
          style="border: 0; margin: auto; border-radius: 20px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <nav class="my-2">
        <ul class="flex flex-col justify-center items-center gap-2 my-5 h-full text-xl">
          <h3 class="text-xl font-titles font-bold uppercase">Navegación</h3>
          <li>
            <a
              href="/privacy-policy"
              class="text-white hover:text-dark-pink duration-150 text-center"
              >Políticas de privacidad</a
            >
          </li>
          <li>
            <a href="/contacto" class="text-white hover:text-dark-pink duration-150 text-center"
              >Contacto</a
            >
          </li>
          <li>
            <a
              href="/sobreNosotros"
              class="text-white hover:text-dark-pink duration-150 text-center"
              >Sobre nosotros</a
            >
          </li>
          <li>
            <a href="/servicios" class="text-white hover:text-dark-pink duration-150 text-center"
              >Servicios</a
            >
          </li>
          <li class="mt-10">
            <h3 class="text-xl font-titles font-bold uppercase mt-5">Sobre nuestra empresa</h3>
            <p class="text-lg text-center max-w-2/3 mx-auto font-subtitles">
              <span class="text-xl font-titles font-bold uppercase text-dark-pink">X22DIGITAL</span>
              es una agencia de marketing digital con 12+ años de experiencia, especializada en
              diseño web, redes sociales y consultoría para negocios en Latinoamérica.
            </p>
          </li>
        </ul>
      </nav>
    </div>
    <p class="font-titles font-semibold mt-10 mb-2">
      &copy; 2023 X22Digital | All rights reserved.
    </p>
  </footer>
</template>
