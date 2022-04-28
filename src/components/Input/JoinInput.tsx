interface IJoinInput {
  className?: string;
}

const JoinInput = (props: IJoinInput) => {
  const { className } = props;

  return (
    <div className={`flex flex-col ${className || ''}`}>
      <p className="text-xs text-gray-300 mb-3">
        Únete a las <span className="text-font-green font-bold">1,000+</span>{' '}
        personas creciendo sus activos de forma inteligente
      </p>
      <div className="prefinery-form-embed"></div>
      {/* <div className="flex flex-col md:flex-row">
        <Input
          placeholder="Email"
          onChange={setEmail}
          className="flex-1 my-3 md:mb-0 md:mr-5"
        />

        <Button onClick={sendEmail}>Unirme</Button>
      </div> */}
    </div>
  );
};

export default JoinInput;
