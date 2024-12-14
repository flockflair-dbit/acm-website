
const Calendar = () => {
  return (
    <div className="content-block">
      <div className="container">
        <div className="clearfix">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_97ed2eb83ebad4f009e6d2022802b5f7d08b9ce100caf71407f72f3a8883b896%40group.calendar.google.com&ctz=Asia%2FKolkata"
            style={{ border: 0 , color:'white' }}
            width="1200"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
