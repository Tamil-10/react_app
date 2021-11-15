import React, { Component } from "react";
import {
  Typography,
  Box,
  Container,
  Card,
  CardHeader,
  Avatar,
  Grid,
  TextField,
  MenuItem,
  Button
} from "@mui/material";
import { connect } from "react-redux";
import { getUsers } from "../../store/user/action";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
      status: ""
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  onChangeValues = ({ target }) => {
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  filter = () => {
    const { dispatch } = this.props;
    const data = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      status: this.state.status
    };
    dispatch(getUsers(data));
  };

  clear = () => {
    const { dispatch } = this.props;

    this.setState({
      name: "",
      email: "",
      gender: "",
      status: ""
    });

    dispatch(getUsers());
  };

  render() {
    return (
      <Container maxWidth='xl'>
        <Box mt={2}>
          <Typography paragraph variant='h6' component='h6'>
            Users
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id='name'
              name='name'
              size='small'
              label='Name'
              variant='outlined'
              value={this.state.name}
              onChange={this.onChangeValues}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id='email'
              name='email'
              size='small'
              label='Email'
              variant='outlined'
              value={this.state.email}
              onChange={this.onChangeValues}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              select
              id='gender'
              name='gender'
              size='small'
              label='Gender'
              variant='outlined'
              value={this.state.gender}
              onChange={this.onChangeValues}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              select
              id='status'
              name='status'
              size='small'
              label='Status'
              variant='outlined'
              value={this.state.status}
              onChange={this.onChangeValues}
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"inactive"}>Inactive</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Box textAlign='right' mt={2} width={1}>
          <Button
            sx={{
              mr: 2
            }}
            color='primary'
            variant='outlined'
            onClick={this.clear}
          >
            Clear
          </Button>
          <Button color='primary' variant='contained' onClick={this.filter}>
            Filter
          </Button>
        </Box>

        <Box
          sx={{
            height: 1,
            mt: 2
          }}
        >
          {this.props.users.length > 0 ? (
            this.props.users.map((user) => (
              <Card
                sx={{
                  mb: 3
                }}
                key={user.id}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label={user.name}>
                      {user.name.charAt(0)}
                    </Avatar>
                  }
                  title={user.name}
                  subheader={user.email}
                />
              </Card>
            ))
          ) : (
            <Box
              minHeight={"60vh"}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              No users to show
            </Box>
          )}
        </Box>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;

  return {
    users: user.users
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
