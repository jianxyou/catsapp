import { StyleSheet } from 'react-native';

const TLFBStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // 你可以根据需要更改背景色
  },

  monthContainer: {
    margin: 25, // 添加底部边距
    // 可以根据需要调整边距大小
  },
  monthYearText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  cell: {
    width: 48, // 可以根据实际情况调整宽度
    height: 48, // 同上，调整高度
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  dateText: {
    fontSize: 16,
    color: '#333', // 文本颜色
  },
  dayInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 16,
  },

   
  // 其他你可能需要的样式...
});

export default TLFBStyles;
