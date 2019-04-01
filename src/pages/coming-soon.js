import React, {Component} from 'react';
import '../styles/comming-soon.scss';
import moment from 'moment';
import pad from 'left-pad'

const env = process.env;
const endDateString = env.REACT_APP_MAINTAIN_FINISH_DATE;
class ComingSoon extends Component {

  constructor(props) {
    super(props)

    this.state = {
      countBg: 0,
      endDate: moment(endDateString)
    }
  }

  componentDidMount() {
    this.intervalTimer = setInterval(() => this.tick(), 1000);
    this.interval = setInterval(() => {
      if (this.state.countBg >= 3) {
        return this.setState({ countBg: 0 })
      }
      return this.setState({ countBg: this.state.countBg + 1})
    }, 6000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer)
    }
  }

  tick () {
    const {endDate} = this.state

    if (!endDate) {
      this.setState({
        countdown: {
          day: pad(0, 2, 0),
          hour: pad(0, 2, 0),
          minute: pad(0, 2, 0),
          second: pad(0, 2, 0)
        },
      })
      return false
    }

    const now = moment()
    const diff = endDate.diff(now, 'seconds')

    if (diff <= 0) {
      this.setState({
        countdown: {
          day: pad(0, 2, 0),
          hour: pad(0, 2, 0),
          minute: pad(0, 2, 0),
          second: pad(0, 2, 0)
        },
        isExpired: true
      })
      return false
    }

    const duration = moment.duration(diff, 'seconds')
    // const countdown = `${(dur.hours(), 2, 0)}:${(dur.minutes(), 2, 0)}:${(dur.seconds(), 2, 0)}`
    const countdown = {day: pad(duration.days(), 2, 0), hour: pad(duration.hours(), 2, 0), minute: pad(duration.minutes(), 2, 0), second: pad(duration.seconds(), 2, 0)}

    this.setState({
      countdown,
      isExpired: false
    })
  }


  render() {
    const { countBg, countdown, endDate } = this.state;

    return(
     <React.Fragment>
       <div className="simpleslide100">
         <div className={`simpleslide100-item bg-img1 ${countBg === 0 ? 'show' : 'hide'}`} style={{ backgroundImage: "url('/image/coming-soon/bg01.jpg')"}}/>
         <div className={`simpleslide100-item bg-img1 ${countBg === 1 ? 'show' : 'hide'}`} style={{ backgroundImage: "url('/image/coming-soon/bg02.jpg')"}}/>
         <div className={`simpleslide100-item bg-img1 ${countBg === 2 ? 'show' : 'hide'}`} style={{ backgroundImage: "url('/image/coming-soon/bg03.jpg')"}}/>
         <div className={`simpleslide100-item bg-img1 ${countBg === 3 ? 'show' : 'hide'}`} style={{ backgroundImage: "url('/image/coming-soon/bg04.jpg')"}}/>
       </div>

       <div className="flex-col-c-sb size1 overlay1">
         <div className="w-full flex-w flex-sb-m p-l-80 p-r-80 p-t-22 p-lr-15-sm">
           <div className="wrappic1 m-r-30 m-t-10 m-b-10">
             <a href="#"><img src="/image/logo/desktop-logo.png" alt="LOGO" /></a>
           </div>

           {/*<div className="flex-w m-t-10 m-b-10">
             <a href="#" className="size2 m1-txt1 flex-c-m how-btn1 trans-04">
               Sign Up
             </a>
           </div>*/}
         </div>

         <div className="flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-120">
           <h3 className="l1-txt1 txt-center p-b-35 respon1">
             Coming Soon
           </h3>

           {countdown && <div className="flex-w flex-c cd100 respon2">
             {countdown && countdown.day && <div className="flex-col-c wsize1 m-b-30">
               <span className="l1-txt2 p-b-37 days">{countdown.day}</span>
               <span className="m1-txt2 p-r-20">Days</span>
             </div>}

             <span className="l1-txt2 p-t-15 dis-none-sm">:</span>

             {countdown && countdown.hour && <div className="flex-col-c wsize1 m-b-30">
               <span className="l1-txt2 p-b-37 hours">{countdown.hour}</span>
               <span className="m1-txt2 p-r-20">Hr</span>
             </div>}

             <span className="l1-txt2 p-t-15 dis-none-lg">:</span>

             {countdown && countdown.minute && <div className="flex-col-c wsize1 m-b-30">
               <span className="l1-txt2 p-b-37 minutes">{countdown.minute}</span>
               <span className="m1-txt2 p-r-20">Min</span>
             </div>}

             <span className="l1-txt2 p-t-15 dis-none-sm">:</span>

             {countdown && countdown.second && <div className="flex-col-c wsize1 m-b-30">
               <span className="l1-txt2 p-b-37 seconds">{countdown.second}</span>
               <span className="m1-txt2 p-r-20">Sec</span>
             </div>}
           </div>}
         </div>

         <div className="flex-w flex-c-m p-b-35">

           <a href="https://twitter.com/DuongCongTung" className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
             <i className="fa fa-twitter"/>
           </a>
           <a href="https://github.com/duongtungls" className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
             <i className="fa fa-github"/>
           </a>

           <a href="https://www.linkedin.com/in/tung-duong-b65015133/" className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
             <i className="fa fa-linkedin" />
           </a>
         </div>
       </div>
     </React.Fragment>
    )
  }
}

export default ComingSoon;