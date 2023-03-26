/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        burnOrange: '#FF6F00',
        // essa cor é inspirada na franquia "Gears of War" e é
        // perfeita para destacar tarefas importantes ou urgentes.
        darkBlue: '#0D47A1',
        //  Azul escuro (#0D47A1): essa cor é inspirada na franquia
        //  "Assassin's Creed" e é ideal para tarefas que exigem concentração e foco.
        mossGreen: '#8BC34A',
        // Verde musgo (#8BC34A): essa cor é inspirada na
        // franquia "Legend of Zelda" e é ótima para tarefas relacionadas à natureza ou atividades físicas.
        lightPink: '#FFC1E3',
        // Rosa claro (#FFC1E3): essa cor é inspirada no
        // jogo "Animal Crossing" e é perfeita para tarefas relacionadas à organização de espaços e decoração.
        yellowBross: '#FDD835',
        // Amarelo (#FDD835): essa cor é inspirada na franquia
        // "Mario Bros" e é ótima para tarefas que exigem criatividade e pensamento fora da caixa.

        background: '#ECEFF1',
      },
    },
  },
  plugins: [],
};
