import Page from './Page';

const DataPage = ({ ip, browser, agent, otherData }) => {
    return <Page ip={ip} browser={browser} agent={agent} otherData={otherData} />;
  };
  
  export const getServerSideProps = async (context) => {
    const { req } = context;
    const browser = req.headers['user-agent'];
    const agent = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  
    return {
      props: {
        ip,
        browser,
        agent,
        otherData,
      },
    };
  };
  
  export default DataPage;