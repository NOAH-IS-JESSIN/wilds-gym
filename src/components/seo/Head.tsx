import { Helmet } from 'react-helmet-async';
import logo from '../../assets/logo.png'; 

interface HeadProps {
  title?: string;
  description?: string;
}

const Head = ({ 
  title = 'Wilds Gym | Personal Training in Amman', 
  description = 'Join the tribe at Wilds Gym in Sweifieh. Expert personal training, nutrition coaching, and a primal atmosphere designed to build real strength.' 
}: HeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="icon" type="image/png" href={logo} />
      <link rel="apple-touch-icon" href={logo} />
      
      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Head;