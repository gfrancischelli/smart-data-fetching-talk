import { connect } from "react-redux";

const mapStateToProps = ({ talks, events, speakers }) => ({
  talks: talks.map(talk => {
    return {
      ...talk,
      event: events[talk.event],
      speaker: speakers[talk.speaker]
    };
  })
});

const TalkList: React.FC = ({ talks }) => {
  return (
    <div>
      {talks.map(talk => (
        <TalkListItem key={talk.id} talk={talk} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TalkList);
