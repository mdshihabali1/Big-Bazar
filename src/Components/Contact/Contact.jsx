

import './Contact.css'

const Contact = () => {
  return (
    <div className='text-center mt-6'>
      <h1 className='text-4xl text-orange-600 font-bold'>Contact Us</h1>
    <div className='bg-black w-4/6 mt-12 text-white m-auto p-4'>
    <p className=''>
        If you have any questions or feedback, please feel free to contact us.
      </p>
      <address>
        Email: contact@example.com<br />
        Phone: (123) 456-7890
      </address>
    </div>
    </div>
  );
};

export default Contact;
