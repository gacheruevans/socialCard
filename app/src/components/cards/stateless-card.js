import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const StatelessCard = () => (
  <Card className="App-card">
    <CardHeader
      title="Octocat Avatar"
      subtitle="Octocat"
    />
    <CardTitle title="Octocat Profile" subtitle="This is a Stateless example, where data is static" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default StatelessCard;