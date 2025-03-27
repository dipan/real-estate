const HELP_EMAIL = (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  return `<b>To:</b> MaaKaliContruction<br/>
    <b>From:</b> ${data.name}<br/>
    <b>Phone:</b> ${data.phone}<br/>
    <br/>
    ${data.message}
`;
};

export default HELP_EMAIL;
