import React from 'react';

import Contact from './Contact';
const contacts = [
  {
    name: 'Bilal Rauf',
    url: 'https://i.ibb.co/6sCTwkW/65826675-10162060934530080-4588876795738062848-n.jpg',
  },
  {
    name: 'Philip Goreham',
    url: 'https://i.ibb.co/vZMxFtL/67135761-366449804288740-7485825313402781696-n.jpg',
  },
  {
    name: 'Ahmed Ali',
    url: 'https://i.ibb.co/vwscCVC/67747171-2402089939876066-2238750358715236352-n.jpg',
  },
  {
    name: 'Trever Evan',
    url: 'https://i.ibb.co/tPSN9Mg/89398994-634131664097284-832006968498454528-n.jpg',
  },
  {
    name: 'Chris Weddle ',
    url: 'https://i.ibb.co/GxMVT95/94914075-10157258818736589-1798945230863466496-n.jpg',
  },
  {
    name: 'Lisa Camm',
    url: 'https://i.ibb.co/tHNHgdJ/269948438-992162574985045-3050706251467054953-n.jpg',
  },
  {
    name: 'Cathrine Scott',
    url: 'https://i.ibb.co/pRRfHgb/270289561-5542162085801048-613660317682081512-n.jpg',
  },
  {
    name: 'Rateb Jidyan',
    url: 'https://i.ibb.co/tZqh6hf/134941091-1725723984271521-7097715263046678568-n.jpg',
  },
  {
    name: 'Zeyad Nassar',
    url: 'https://i.ibb.co/LrW1kGp/36971778-10214481243317700-4806239837843619840-n.jpg',
  },
];
const Contacts = () => {
  return (
    <div className="hidden xl:flex  min-w-[300px] flex-col  py-4 px-2">
      <div className="flex flex-col space-y-4 mt-5">
        {contacts.map((contact) => (
          <Contact key={contact.name} name={contact.name} src={contact.url} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
