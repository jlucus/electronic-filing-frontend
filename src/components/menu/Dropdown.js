import RcDropdown from 'rc-dropdown';

const Dropdown = ({children, ...restProps}) => {
  return (
    <RcDropdown
      trigger={['click']}
      prefixCls="ef-dropdown"
      {...restProps}>
      {children}
    </RcDropdown>
  );
};

export default Dropdown;
