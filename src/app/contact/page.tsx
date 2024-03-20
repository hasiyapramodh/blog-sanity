import ContactForm from '../../components/Contact/ContactForm';

// Interface for metadata (optional)
interface Metadata {
    title:string;
    description:string;
    }

    export const metadata: Metadata ={
        title: "Contact Me",
        description: 'Contact me through the form available on this page or email me at ${siteMetadata.email}',
    };

    export default function Contact(): JSX.Element {
        return (
          <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
            <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
              <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">Let's Connect!</h2>
              <ContactForm /> {/* Ensure ContactForm is correctly imported */}
            </div>
          </section>
        );
      }
      
      