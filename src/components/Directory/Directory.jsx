import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/DirectorySelector';

import './directory.scss';

const Directory = ({ sections }) => (

      // <div className='directory-menu'>
      //   {this.state.sections.map(({ title, imageUrl, id, size }) => (
      //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      //   ))}
      // </div>

      // OR

      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps }/>
        ))}
      </div>

)

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps, null)(Directory);
