import React from 'react';
import english from '../../../assets/image/coreEnglish.svg';

export default function Content02() {
  return (
    <div className="coreModal">
      <h1>Núcleo Inglês</h1>
      <div className="core">
        <div className="core_1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
            porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
            leo. Aliquam tincidunt maximus risus quis pellentesque. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc congue quis justo
            et ultricies. Etiam posuere nisl velit, eget dictum felis porttitor
            ac. Aenean leo dui, consectetur ut cursus non, blandit id leo.
            Aliquam tincidunt maximus risus quis pellentesque.
          </p>
        </div>
        <div className="core_2">
          <img src={english} alt="Imagem núcleo escolar" />
        </div>
      </div>
    </div>
  );
}
