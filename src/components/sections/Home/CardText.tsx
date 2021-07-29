// @ts-ignore
// import Speech from 'react-speech';
import './cardtext.scss';
type Props = {
  text: string;
};

const CardText = (props: Props) => {
  return (
    <div className='cardwhole col-6 text-center'>
      <div className='cardtext col-10 px-1 text-center'>
        <div className='card-body text-dark'>
          <p className='btn btn-outline-success card-title' style={{ float: 'right' }}>
            <b>{props.text}</b>
            <br />
			{/* <Speech 
			text={props.text} 
			voice='US English Female' /> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardText;

