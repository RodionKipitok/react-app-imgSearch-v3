import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#0000FF"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="wrapper"
      visible={true}
    />
  );
};
export default Loader;